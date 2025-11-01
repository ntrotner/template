<script lang="ts">
  import { goto } from "$app/navigation";
  import { ROUTES } from "$lib/routes";
  import { t } from "$lib/i18n";
  import LazyLoad from "../../directives/LazyLoad.svelte";
  import { browser } from "$app/environment";

  interface Props {
    showTitle?: boolean;
  }

  let { showTitle = true }: Props = $props();

  function redirect(page: string) {
    if (browser) {
      goto(page);
    }
  }
</script>

<div class="px-2 sm:px-4 mx-0 mb-1 sm:mb-2 mt-3 sm:mt-5 h-12">
  <div class="flex items-center justify-between">
    <div class="title">
      {#if showTitle}
        <a
          href={ROUTES.HOME}
          class="text-lg hover:underline"
          aria-label={$t("common.aria.nav-menu.home")}
          onclick={() => redirect(ROUTES.HOME)}>{$t("common.nav-title")}</a
        >
      {/if}
    </div>
    <div>
      <LazyLoad
        class="w-24 h-10"
        showSkeleton={true}
        load={browser}
        importStatement={() => import("./NavigationActions.svelte")}
      />
    </div>
  </div>
</div>
