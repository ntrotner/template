<script>
  import { BootstrapConfig } from "$lib/bootstrap-config/config";
  import { t } from "$lib/i18n";
  import { ROUTES } from "$lib/routes";

  const year = new Date().getFullYear();
</script>

<footer
  class="pb-2 pt-4 bg-gray-100 px-4"
  aria-label={$t("common.aria.footer")}
>
  <div
    class="flex flex-col sm:flex-row-reverse justify-between items-center gap-4 mx-auto max-w-screen-2xl"
  >
    <nav
      class="flex sm:gap-8 gap-4 flex-wrap flex-col sm:flex-row text-center"
      aria-label={$t("common.aria.footer-navigation")}
    >
      <a
        href={ROUTES.IMPRINT}
        class="text-md sm:text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200 underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-1 rounded"
        aria-label={$t("common.aria.nav-menu.imprint")}
        >{$t("common.imprint")}</a
      >
      <a
        href={ROUTES.PRIVACY}
        class="text-md sm:text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200 underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-1 rounded"
        aria-label={$t("common.aria.nav-menu.privacy")}
        >{$t("common.privacy")}</a
      >
      {#if BootstrapConfig.app.adminOnly}
        <a
          href={ROUTES.LOGIN}
          class="text-md sm:text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200 underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-1 rounded"
          aria-label={$t("common.aria.nav-menu.login")}
          >{$t("common.nav-menu.login")}</a
        >
      {/if}
    </nav>

    <div role="region" aria-label={$t("common.aria.copyright-info")}>
      <p class="text-md">
        © {year}
        {$t("common.specifics.host")}
      </p>
      <p class="mt-2 text-xs">
        Made with <span aria-label="love">♥</span> by
        <a
          href="https://ttnr.me"
          class="text-gray-600 hover:text-gray-900 underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-1 rounded"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={$t("common.aria.nav-menu.ttnr") +
            " " +
            $t("common.aria.external-link")}
        >
          ttnr.me
        </a>
      </p>
    </div>
  </div>
</footer>
