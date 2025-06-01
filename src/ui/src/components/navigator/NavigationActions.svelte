<script lang="ts">
  import {
    Menubar,
    MenubarTrigger,
    MenubarContent,
    MenubarItem,
    MenubarSeparator,
    MenubarMenu,
  } from "$lib/components/ui/menubar/index.js";
  import {
    Sheet,
    SheetTrigger,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetDescription,
    SheetClose,
  } from "$lib/components/ui/sheet/index.js";
  import MenuIcon from "lucide-svelte/icons/menu";
  import Globe from "lucide-svelte/icons/globe";
  import { Separator } from "$lib/components/ui/separator/index.js";
  import { Button } from "$lib/components/ui/button/index.js";
  import { languages, setLocale, setLocaleInStorage, t } from "$lib/i18n";
  import { goto } from "$app/navigation";
  import { browser } from "$app/environment";
  import { ROUTES } from "$lib/routes";
  import { userState } from "$lib/states/user";
  import { onDestroy } from "svelte";
  import type { Unsubscriber } from "svelte/store";
  import { Avatar, AvatarFallback } from "$lib/components/ui/avatar/index.js";
  import { BootstrapConfig } from "$lib/bootstrap-config/config";

  const subscriptions: Unsubscriber[] = [];
  const user = userState.getAsyncState();
  let menuBarOptions: Menubar;
  let profileBarOptions: Menubar;

  function changeMenuState(nextState: boolean) {
    if (menuBarOptions) {
      // @ts-ignore
      menuBarOptions.$set({ open: nextState });
    }
  }

  function changeProfileState(nextState: boolean) {
    if (profileBarOptions) {
      // @ts-ignore
      profileBarOptions.$set({ open: nextState });
    }
  }

  function changeLanguage(locale: string) {
    setLocale(locale);
    setLocaleInStorage(locale);
    if (browser) {
      document.documentElement.lang = locale;
    }
  }

  function redirect(page: string) {
    if (browser) {
      goto(page);
    }
  }

  onDestroy(() => subscriptions.forEach((s) => s()));
</script>

<Sheet>
  <SheetTrigger asChild let:builder>
    <div class="nav-right flex col-span-1 justify-end">
      <div class="language mr-3">
        <Button
          builders={[builder]}
          variant="ghost"
          size="icon"
          aria-label={$t("common.aria.nav-language.language-description")}
          class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          <Globe class="h-5 w-5" aria-hidden="true" />
          <span class="sr-only">{$t("common.nav-language.language")}</span>
        </Button>
      </div>
      {#if $user?.email}
        <div>
          <div>
            <Menubar class="border-0">
              <MenubarMenu
                onOutsideClick={() => {
                  changeProfileState(false);
                  changeMenuState(false);
                }}
                bind:this={profileBarOptions}
              >
                <MenubarTrigger
                  aria-label={$t("common.aria.user-menu")}
                  class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  <Avatar>
                    <AvatarFallback>{$user.email.slice(0, 2)}</AvatarFallback>
                  </Avatar>
                </MenubarTrigger>
                <MenubarContent>
                  <MenubarItem
                    aria-label={$t("common.aria.nav-menu.profile")}
                    on:click={() => redirect(ROUTES.PROFILE)}
                    >{$t("common.nav-menu.profile")}</MenubarItem
                  >
                  <MenubarSeparator />
                  <MenubarItem
                    aria-label={$t("common.aria.nav-menu.logout")}
                    on:click={() => redirect(ROUTES.LOGOUT)}
                    >{$t("common.nav-menu.logout")}</MenubarItem
                  >
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </div>
        </div>
      {/if}
      <div>
        {#if !BootstrapConfig.app.adminOnly || $user?.role === "admin"}
          <Menubar class="border-0">
            <MenubarMenu
              onOutsideClick={() => {
                changeProfileState(false);
                changeMenuState(false);
              }}
              bind:this={menuBarOptions}
            >
              <MenubarTrigger
                aria-label={$t("common.aria.main-menu")}
                class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                <MenuIcon class="h-6 w-6" aria-hidden="true" />
                <span class="sr-only">{$t("common.aria.main-menu")}</span>
              </MenubarTrigger>
              <MenubarContent>
                {#if $user?.email}
                  <MenubarItem on:click={() => redirect(ROUTES.HOME)}
                    >{$t("common.nav-links.home")}</MenubarItem
                  >
                {:else}
                  <MenubarItem on:click={() => redirect(ROUTES.LOGIN)}
                    >{$t("common.nav-menu.login")}</MenubarItem
                  >
                {/if}
                {#if $user?.role === "admin"}
                  <MenubarItem on:click={() => redirect(ROUTES.ADMIN)}
                    >{$t("common.admin")}</MenubarItem
                  >
                {/if}
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        {/if}
      </div>
    </div>
  </SheetTrigger>
  <SheetContent side="right">
    <SheetHeader>
      <SheetTitle>{$t("common.nav-language.language")}</SheetTitle>
      <SheetDescription>
        {$t("common.nav-language.language-description")}
      </SheetDescription>
    </SheetHeader>
    <SheetClose asChild let:builder>
      <div class="space-y-4 py-4">
        <div class="space-y-1">
          {#each languages as language}
            <Button
              builders={[builder]}
              on:click={() => changeLanguage(language.locale)}
              variant="link"
              class="justify-center w-full language-select"
            >
              {$t(language.key)}
            </Button>
            <Separator class="my-4" />
          {/each}
        </div>
      </div>
    </SheetClose>
  </SheetContent>
</Sheet>
