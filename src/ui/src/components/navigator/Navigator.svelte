<script lang="ts">
  import {
    Menubar,
    MenubarTrigger,
    MenubarContent,
    MenubarItem,
    MenubarSeparator,
    MenubarMenu,
  } from "$lib/components/ui/menubar";
  import {
    Sheet,
    SheetTrigger,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetDescription,
    SheetClose,
  } from "$lib/components/ui/sheet/index.js";
  import { MenuIcon, GlobeIcon } from "@lucide/svelte";
  import { Separator } from "$lib/components/ui/separator/index.js";
  import { Button } from "$lib/components/ui/button/index.js";
  import { languages, setLocale, setLocaleInStorage, t } from "$lib/i18n";
  import { goto } from "$app/navigation";
  import { browser } from "$app/environment";
  import { ROUTES } from "$lib/routes";
  import { appState } from "$lib/states/app";
  import { userState } from "$lib/states/user";
  import { onDestroy } from "svelte";
  import type { Unsubscriber } from "svelte/store";
  import { map } from "rxjs";
  import { BootstrapConfig } from "$lib/bootstrap-config/config";

  const subscriptions: Unsubscriber[] = [];
  const isUserEnabled = BootstrapConfig.app.user;
  const user = userState.getAsyncState();
  const mobile = appState
    .observable()
    .pipe(map((state) => (state?.width || 0) <= 640));
  let menuBarOptions: Menubar = $state();

  function changeMenuState(nextState: boolean) {
    // @ts-ignore
    menuBarOptions.$inject_state({ open: nextState });
  }

  function changeLanguage(locale: string) {
    setLocale(locale);
    setLocaleInStorage(locale);
    if (browser) {
      document.documentElement.lang = locale;
    }
  }

  function redirect(page: string) {
    const path = page && page.length > 0 ? `/${page}` : "/";
    goto(path);
  }

  onDestroy(() => subscriptions.forEach((s) => s()));
</script>

<Sheet>
  <SheetTrigger asChild>
    {#snippet children({ builder })}
      <Menubar class={$mobile ? "h-15" : "h-14"}>
        <div class="nav-left">
          <div class="title">
            <Button
              onclick={() => redirect(ROUTES.HOME)}
              variant="link"
              class="text-lg font-semibold">{$t("common.nav-title")}</Button
            >
          </div>
        </div>
        <div class="language">
          <Button
            onclick={() => changeMenuState(false)}
            builders={[builder]}
            variant="ghost"
            size="icon"
          >
            <GlobeIcon class={$mobile ? "h-4 w-4" : "h-5 w-5"} />
          </Button>
        </div>
        <div class="nav-right">
          {#if isUserEnabled}
            <MenubarMenu
              onOutsideClick={() => changeMenuState(false)}
              bind:this={menuBarOptions}
            >
              <MenubarTrigger
                ><MenuIcon
                  class={$mobile ? "h-5 w-5" : "h-6 w-6"}
                /></MenubarTrigger
              >
              <MenubarContent>
                {#if $user?.email}
                  <MenubarItem onSelect={() => redirect(ROUTES.HOME)}
                    >{$t("common.nav-links.home")}</MenubarItem
                  >
                  <MenubarItem onSelect={() => redirect(ROUTES.PROFILE)}
                    >{$t("common.nav-menu.profile")}</MenubarItem
                  >
                  <MenubarSeparator />
                  <MenubarItem onSelect={() => redirect(ROUTES.LOGOUT)}
                    >{$t("common.nav-menu.logout")}</MenubarItem
                  >
                {:else}
                  <MenubarItem onSelect={() => redirect(ROUTES.LOGIN)}
                    >{$t("common.nav-menu.login")}</MenubarItem
                  >
                {/if}
              </MenubarContent>
            </MenubarMenu>
          {/if}
        </div>
      </Menubar>
    {/snippet}
  </SheetTrigger>
  <SheetContent side="right">
    <SheetHeader>
      <SheetTitle>{$t("common.nav-language.language")}</SheetTitle>
      <SheetDescription>
        {$t("common.nav-language.language-description")}
      </SheetDescription>
    </SheetHeader>
    <SheetClose asChild>
      {#snippet children({ builder })}
        <div class="space-y-4 py-4">
          <div class="space-y-1">
            {#each languages as language}
              <Button
                builders={[builder]}
                onclick={() => changeLanguage(language.locale)}
                variant="link"
                class="{$mobile
                  ? 'justify-center'
                  : 'justify-start'} w-full language-select"
              >
                {$t(language.key)}
              </Button>
              <Separator class="my-4" />
            {/each}
          </div>
        </div>
      {/snippet}
    </SheetClose>
  </SheetContent>
</Sheet>

<style>
  .nav-left {
    display: flex;
    align-items: center;
    width: 100%;
  }

  .nav-right {
    margin-left: 0.6rem !important; /* :( */
  }

  .title {
    margin: 0 0.2rem 0 0.1rem;
    font-size: 24px;
  }
</style>
