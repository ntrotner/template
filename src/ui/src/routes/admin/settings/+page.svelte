<script lang="ts">
  import { onMount } from "svelte";

  import { metadataState, fetchMetadata } from "$lib/states/metadata";
  import { AlertCircle } from "lucide-svelte";
  import { derived } from "svelte/store";
  import { t } from "$lib/i18n";
  import LazyLoad from "../../../directives/LazyLoad.svelte";
  import { browser } from "$app/environment";
  import { BootstrapConfig } from "$lib/bootstrap-config/config";

  // Reactive statement to get metadata state
  $: metadataStateValue = metadataState.getAsyncState();
  $: error = derived(metadataStateValue, (state) => state?.error);

  // Load metadata on component mount
  onMount(async () => {
    await fetchMetadata();
  });
</script>

<div class="container mx-auto p-0">
  <!-- Page Header -->
  <div class="space-y-2">
    <h1 class="text-3xl font-bold tracking-tight">
      {$t("admin.settings.title")}
    </h1>
    <p class="text-muted-foreground">
      {$t("admin.settings.description")}
    </p>
  </div>

  <!-- Error Message -->
  {#if $error}
    <div
      class="flex items-center gap-2 md:my-4 my-2 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800"
    >
      <AlertCircle class="h-5 w-5" />
      <span>{$error}</span>
    </div>
  {/if}

  <div class="my-4">
    {#if BootstrapConfig.app.shopOpeningHours || BootstrapConfig.app.shopAddress}
      <LazyLoad
        load={browser}
        class="w-full h-64"
        showSkeleton={true}
        importStatement={() => import("../../../components/admin/metadata/Metadata.svelte")}
      />
    {/if}
  </div>
</div>
