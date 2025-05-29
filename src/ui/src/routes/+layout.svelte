<script lang="ts">
  import "../app.pcss";
  import LazyLoad from "../directives/LazyLoad.svelte";
  import { browser } from "$app/environment";
  import { page } from "$app/stores";
  import { DoubleBounce } from "svelte-loading-spinners";

  const isRootPath = $page.url.pathname === "/" || $page.url.pathname === "";
</script>

{#if !isRootPath && !browser}
  <div class="overlay">
    <div class="loading">
      <DoubleBounce color="#0f172a"></DoubleBounce>
    </div>
  </div>
{:else}
  <div>
    <LazyLoad
      load={browser}
      importStatement={() => import("$lib/components/ui/sonner/index.js").then((module) => module.Toaster)}
    />
    <slot />
  </div>
{/if}
