<script>
  import "../app.pcss";
  import Navigator from "../components/navigator/Navigator.svelte";
  import { Toaster } from "$lib/components/ui/sonner";
  import { appState } from "$lib/states/app";
  import { DoubleBounce } from "svelte-loading-spinners";
  import { refreshToken } from "$lib/states/authentication";
  import { browser } from "$app/environment";

  if (browser) {
    setInterval(() => refreshToken(), 1000 * 60 * 5);
    refreshToken().finally(() => appState.setLoaded(true));
  }
  $: currentAppState = appState.getAsyncState();
</script>

{#if !$currentAppState?.loaded}
  <div class="overlay">
    <div class="loading">
      <DoubleBounce color="#0f172a"></DoubleBounce>
    </div>
  </div>
{/if}
<Navigator></Navigator>
<Toaster></Toaster>
<slot />

<style>
  .loading {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
  }
  .overlay {
    display: block;
    position: fixed;
    width: 100%; 
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.04);
    z-index: 2;
    cursor: pointer;
  }
</style>
