<script lang="ts">
  import "../app.pcss";
  import LazyLoad from "../directives/LazyLoad.svelte";
  import { browser } from "$app/environment";
</script>

<div class="mx-auto max-w-screen-2xl">
  <LazyLoad
    load={browser}
    importStatement={() => import("$lib/components/ui/sonner/index.js").then((module) => module.Toaster)}
  />
  <slot />
</div>
