<script lang="ts">
  import "../app.css";
  import { browser } from "$app/environment";
  import { page } from "$app/state";
  import { DoubleBounce } from "svelte-loading-spinners";
  import { Toaster } from "$lib/components/ui/sonner";
  import { BootstrapConfig } from "$lib/bootstrap-config/config";
  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();

  const isRootPath = page.url.pathname === "/" || page.url.pathname === "";
  const isImprintPath = page.url.pathname.includes("imprint");
  const isPrivacyPath = page.url.pathname.includes("privacy");
</script>

<svelte:head>
  {#if BootstrapConfig.app.cookieConsentScript}
    <script
      src={BootstrapConfig.app.cookieConsentScript}
      referrerpolicy="origin"
      defer
    ></script>
  {/if}
</svelte:head>

{#if !isRootPath && !isImprintPath && !isPrivacyPath && !browser}
  <div class="overlay">
    <div class="loading">
      <DoubleBounce color="#0f172a"></DoubleBounce>
    </div>
  </div>
{:else}
  <div class="min-h-screen">
    <Toaster />
    {@render children?.()}
  </div>
{/if}
