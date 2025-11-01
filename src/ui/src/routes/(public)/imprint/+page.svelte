<script>
  import { t } from "$lib/i18n";
</script>

<svelte:head>
  <title>{$t("common.imprint")} - {$t("common.specifics.title.main")}</title>
  <meta
    name="description"
    content={$t("common.imprint") + " - " + $t("common.specifics.title.main")}
  />
  <meta name="robots" content="index, follow" />
</svelte:head>
