<script lang="ts">
  import "../app.pcss";
  import { browser } from "$app/environment";
  import { page } from "$app/stores";
  import { DoubleBounce } from "svelte-loading-spinners";
  import { Toaster } from "$lib/components/ui/sonner";

  const isRootPath = $page.url.pathname === "/" || $page.url.pathname === "";
  const isImprintPath = $page.url.pathname.includes("imprint");
</script>

{#if !isRootPath && !isImprintPath && !browser}
  <div class="overlay">
    <div class="loading">
      <DoubleBounce color="#0f172a"></DoubleBounce>
    </div>
  </div>
{:else}
  <div class="min-h-screen">
    <Toaster />
    <slot />
  </div>
{/if}
