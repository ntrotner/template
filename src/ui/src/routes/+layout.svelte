<script lang="ts">
  import "../app.pcss";
  import Navigator from "../components/navigator/Navigator.svelte";
  import { Toaster } from "$lib/components/ui/sonner";
  import { DoubleBounce } from "svelte-loading-spinners";
  import { Injector } from "$lib/injector";
  import { writable, type Unsubscriber } from "svelte/store";
  import { onDestroy } from "svelte";
 
  const subscriptions: Unsubscriber[] = [];
  const loaded = writable(false);

  (async () => {
    const appState = await Injector.getService('appState');
    subscriptions.push(
      appState.subscribe(state => loaded.set(!!state?.loaded))
    );
  })()

  onDestroy(() => subscriptions.forEach(s => s()));
</script>

{#if !$loaded}
  <div class="overlay">
    <div class="loading">
      <DoubleBounce color="#0f172a"></DoubleBounce>
    </div>
  </div>
{/if}
<Navigator></Navigator>
<Toaster></Toaster>
{#if $loaded}
  <slot />
{/if}

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
