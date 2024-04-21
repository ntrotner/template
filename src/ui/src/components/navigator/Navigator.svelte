<script lang="ts">
  import * as Menubar from "$lib/components/ui/menubar";
  import * as Sheet from "$lib/components/ui/sheet/index.js";
  import Globe from "svelte-radix/Globe.svelte";
  import HamburgerMenu from "svelte-radix/HamburgerMenu.svelte";
  import { Separator } from "$lib/components/ui/separator/index.js";
  import { Button } from "$lib/components/ui/button/index.js";
  import { languages, setLocale, setLocaleInStorage, t } from "$lib/i18n";
  import type { UserProfile } from "$lib/open-api";
  import { goto } from "$app/navigation";
  import { browser } from "$app/environment";
  import { ROUTES } from "$lib/routes";
  import { appState, userState } from "$lib/states";

  let menuBarOptions: Menubar.Menubar;

  function changeMenuState(nextState: boolean) {
    // @ts-ignore
    menuBarOptions.$inject_state({'open' : nextState})
  }

  function changeLanguage(locale: string) {
    setLocale(locale);
    setLocaleInStorage(locale);
    if (browser) {
      document.documentElement.lang = locale;
    } 
  }

  function redirect(page: string) {
    goto(page)
  }

  let user: UserProfile | undefined = undefined;
  userState.subscribe((state) => (user = state));
  let mobile = false;
  appState.subscribe((app) => mobile = (app?.width || 0) <= 640);
</script>

<Sheet.Root>
  <Sheet.Trigger asChild let:builder>
    <Menubar.Root class="{mobile ? 'h-15' : 'h-14'}">
      <div class="nav-left">
        <div class="title">
          <Button
            on:click={() => redirect(ROUTES.HOME)}
            variant="link"
            class="text-lg font-semibold">{$t("common.nav-title")}</Button
          >
        </div>
      </div>
      <div>
        <Button on:click={() => changeMenuState(false)} builders={[builder]} variant="ghost" size="icon">
          <Globe class="{mobile ? 'h-4 w-4' : 'h-5 w-5'}" />
        </Button>
      </div>
      <div class="nav-right">
        <Menubar.Menu onOutsideClick={() => changeMenuState(false)} bind:this={menuBarOptions}>
          <Menubar.Trigger><HamburgerMenu class="{mobile ? 'h-5 w-5' : 'h-6 w-6'}" /></Menubar.Trigger>
          <Menubar.Content>
            {#if user?.email}
              <Menubar.Item>{$t("common.nav-menu.profile")}</Menubar.Item>
              <Menubar.Item>{$t("common.nav-menu.settings")}</Menubar.Item>
              <Menubar.Separator />
              <Menubar.Item on:click={() => redirect(ROUTES.LOGOUT)}
                >{$t("common.nav-menu.logout")}</Menubar.Item>
            {:else}
              <Menubar.Item on:click={() => redirect(ROUTES.LOGIN)}
                >{$t("common.nav-menu.login")}</Menubar.Item
              >
            {/if}
          </Menubar.Content>
        </Menubar.Menu>
      </div>
    </Menubar.Root>
  </Sheet.Trigger>
  <Sheet.Content side="right">
    <Sheet.Header>
      <Sheet.Title>{$t("common.nav-language.language")}</Sheet.Title>
      <Sheet.Description>
        {$t("common.nav-language.language-description")}
      </Sheet.Description>
    </Sheet.Header>
    <Sheet.Close asChild let:builder>
      <div class="space-y-4 py-4">
        <div class="space-y-1">
          {#each languages as language}
            <Button
              builders={[builder]}
              on:click={() => changeLanguage(language.locale)}
              variant="link"
              class="{mobile ? 'justify-center' : 'justify-start'} w-full language-select"
            >
              {$t(language.key)}
            </Button>
            <Separator class="my-4" />
          {/each}
        </div>
      </div>
    </Sheet.Close>
  </Sheet.Content>
</Sheet.Root>

<style>
  .nav-left {
    display: flex;
    align-items: center;
    width: 100%;
  }

  .nav-right {
    margin-left: .6rem !important; /* :( */
  }

  .title {
    margin: 0 0.2rem 0 0.1rem;
    font-size: 24px;
  }
</style>
