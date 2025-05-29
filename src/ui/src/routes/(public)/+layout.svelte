<script lang="ts">
  import { BootstrapConfig } from "$lib/bootstrap-config/config";
  import SlimNavigator from "../../components/navigator/SlimNavigator.svelte";
  import LazyLoad from "../../directives/LazyLoad.svelte";
  import Footer from "../../components/footer/Footer.svelte";

  const navigatorStyle = BootstrapConfig.app.navigation;
</script>

<div class="flex flex-col h-screen">
  <div class="mx-auto w-full max-w-screen-2xl flex-1">
    {#if navigatorStyle === "bulky"}
      <LazyLoad
        load={navigatorStyle === "bulky"}
        importStatement={() => import("../../components/navigator/Navigator.svelte")}
      />
    {/if}
    {#if navigatorStyle === "slim"}
      <SlimNavigator />
    {/if}
    <main class="flex-1">
      <slot />
    </main>
  </div>
  <Footer />
</div>
