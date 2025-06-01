<script>
  import { BootstrapConfig } from "$lib/bootstrap-config/config";
  import { t } from "$lib/i18n";
  import ShopHeader from "../../components/shop/ShopHeader.svelte";
  import ShopMain from "../../components/shop/ShopMain.svelte";
  import ShopContact from "../../components/shop/ShopContact.svelte";
  import ShopStructuredData from "../../components/seo/ShopStructuredData.svelte";
  import SeoMetadata from "../../components/seo/Metadata.svelte";
  import ShopOpenGraph from "../../components/seo/ShopOpenGraph.svelte";
  import ShopTwitter from "../../components/seo/ShopTwitter.svelte";
</script>

<svelte:head>
  <title>{$t("seo.title.main")} - {$t("seo.title.sub")}</title>
  {#if BootstrapConfig.app.seo?.metadata}
    <SeoMetadata />
  {/if}

  {#if BootstrapConfig.shop.seo?.openGraph}
    <ShopOpenGraph />
  {/if}

  {#if BootstrapConfig.shop.seo?.twitter}
    <ShopTwitter />
  {/if}

  {#if BootstrapConfig.shop.seo?.structuredData}
    <ShopStructuredData />
  {/if}
</svelte:head>

<main aria-label={$t("common.aria.main-content")}>
  {#if BootstrapConfig.shop.shopHeader}
    <ShopHeader />
  {/if}

  {#if BootstrapConfig.shop.shopAddress || BootstrapConfig.shop.shopOpeningHours}
    <ShopMain />
  {/if}

  {#if BootstrapConfig.shop.shopContact}
    <ShopContact />
  {/if}
</main>
