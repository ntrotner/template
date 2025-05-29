<script>
  import { BootstrapConfig } from "$lib/bootstrap-config/config";
  import { t } from "$lib/i18n";
  import { ROUTES } from "$lib/routes";

  const year = new Date().getFullYear();
</script>

<footer class="pb-2 pt-4 bg-gray-100 px-4">
  <div
    class="flex flex-col sm:flex-row-reverse justify-between items-center gap-4 mx-auto max-w-screen-2xl"
  >
    <nav class="flex sm:gap-8 gap-4 flex-wrap flex-col sm:flex-row text-center">
      <a
        href={ROUTES.IMPRINT}
        class="text-md sm:text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
        >{$t("common.impressum")}</a
      >
      {#if BootstrapConfig.app.adminOnly}
        <a
          href={ROUTES.LOGIN}
          class="text-md sm:text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >{$t("common.nav-menu.login")}</a
        >
      {/if}
    </nav>

    <div>
      <p class="text-md">
        © {year}
        {$t("common.specifics.host")}
      </p>
      <p class="mt-2 text-xs">
        Made with ♥ by
        <a
          href="https://ttnr.me"
          class="text-gray-600 hover:text-gray-900"
          target="_blank"
        >
          ttnr.me
        </a>
      </p>
    </div>
  </div>
</footer>
