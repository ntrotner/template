<script lang="ts">
  import "../app.pcss";
  import Navigator from "../components/navigator/Navigator.svelte";
  import { Toaster } from "$lib/components/ui/sonner";
  import { appState } from "$lib/states/app";
  import { DoubleBounce } from "svelte-loading-spinners";
  import {
    authenticationState,
    refreshToken,
  } from "$lib/states/authentication";
  import { writable } from "svelte/store";
  import { TOKEN_REFRESH_IN_MS } from "$lib/open-api/helpers";
  import { browser } from "$app/environment";
  import { configState } from "$lib/states/config";
  import { type AppConfig, AppConfigKey } from "$lib/states/status";
  import { map } from "rxjs";

  const loading = writable(true);

  if (browser) {
    setInterval(() => refreshToken(), TOKEN_REFRESH_IN_MS);
    refreshToken();
    appState.setLoaded(true);
    authenticationState
      .getAsyncState()
      .subscribe((state) =>
        loading.set(typeof state?.authenticated === "undefined"),
      );
  }

  $: enableLoadingScreen = configState.getConfig<AppConfig>(AppConfigKey).pipe(map(config => !!config?.showLoadingIndicator));
</script>

{#if $loading && $enableLoadingScreen}
  <div class="overlay">
    <div class="loading">
      <DoubleBounce color="#0f172a"></DoubleBounce>
    </div>
  </div>
{/if}
<Navigator></Navigator>
<Toaster></Toaster>
{#if !$loading || !$enableLoadingScreen}
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
