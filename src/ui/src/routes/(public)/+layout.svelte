<script lang="ts">
  import { BootstrapConfig } from "$lib/bootstrap-config/config";
  import SlimNavigator from "../../components/navigator/SlimNavigator.svelte";
  import LazyLoad from "../../directives/LazyLoad.svelte";

  const navigatorStyle = BootstrapConfig.app.navigation;
</script>

<div class="mx-auto max-w-screen-2xl">
  {#if navigatorStyle === "bulky"}
    <LazyLoad
      load={navigatorStyle === "bulky"}
      importStatement={() => import("../../components/navigator/Navigator.svelte")}
    />
  {/if}
  {#if navigatorStyle === "slim"}
    <SlimNavigator />
  {/if}
  <slot />
</div>
