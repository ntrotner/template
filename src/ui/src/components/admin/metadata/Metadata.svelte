<!-- @migration-task Error while migrating Svelte code: can't migrate `$: metadataStateValue = metadataState.getAsyncState();` to `$derived` because there's a variable named derived.
     Rename the variable and try again or migrate by hand. -->
<script lang="ts">
  import { onMount } from "svelte";
  import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
  } from "$lib/components/ui/card/index.js";
  import { Input } from "$lib/components/ui/input";
  import { Label } from "$lib/components/ui/label";
  import { Button } from "$lib/components/ui/button";
  import { Textarea } from "$lib/components/ui/textarea";
  import {
    metadataState,
    fetchMetadata,
    updateShopSettings,
    type ShopMetadata,
  } from "$lib/states/metadata";
  import {
    ClockIcon,
    MapPinIcon,
    SaveIcon,
    RotateCcwIcon,
  } from "@lucide/svelte";
  import { derived } from "svelte/store";
  import { Skeleton } from "$lib/components/ui/skeleton";
  import { t } from "$lib/i18n";
  import { toast } from "svelte-sonner";
  import { writable } from "svelte/store";
  import { Checkbox } from "$lib/components/ui/checkbox";
  import { BootstrapConfig } from "$lib/bootstrap-config/config";

  let openingHoursByDay: Record<string, string> = {
    monday: "",
    tuesday: "",
    wednesday: "",
    thursday: "",
    friday: "",
    saturday: "",
    sunday: "",
  };
  let closedDaysByDay: Record<string, boolean> = {
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    sunday: false,
  };
  let address = "";
  const saving = writable(false);
  const loadedFirstTime = writable(false);

  // Reactive statement to get metadata state
  $: metadataStateValue = metadataState.getAsyncState();
  $: loading = derived(metadataStateValue, (state) => !!state?.loading);
  $: loaded = derived(loadedFirstTime, (state) => !!state);

  // Load metadata on component mount
  onMount(async () => {
    await fetchMetadata();
    loadFromBackend(metadataState.getShopMetadata());
    loadedFirstTime.set(true);
  });

  function loadFromBackend(shopData: ShopMetadata) {
    address = shopData.address || "";
    const openingHours = JSON.parse(shopData.openingHours || "{}");
    const closedDays = JSON.parse(shopData.closedDays || "{}");

    Object.keys(openingHoursByDay).forEach((day) => {
      openingHoursByDay[day] = openingHours[day] || "";
    });
    Object.keys(closedDaysByDay).forEach((day) => {
      closedDaysByDay[day] = closedDays[day];
    });
  }

  function reset() {
    loadFromBackend(metadataState.getShopMetadata());
  }

  async function handleSave() {
    try {
      saving.set(true);
      await updateShopSettings(
        JSON.stringify(openingHoursByDay),
        address.trim(),
        JSON.stringify(closedDaysByDay),
      );
      toast.success($t("admin.settings.success"), {
        duration: 7500,
      });
    } catch (err) {
      console.error("Failed to save settings:", err);
    } finally {
      saving.set(false);
    }
  }

  $: canSave = address.trim() && !$saving && !$loading;
</script>

<!-- Settings Form -->
<Card>
  <CardHeader class="md:px-6 px-4">
    <CardTitle class="flex items-center gap-2 px-0"
      >{$t("admin.settings.shop-information")}</CardTitle
    >
  </CardHeader>

  <CardContent class="px-4 md:px-6 xl:px-8">
    {#if !$loaded}
      <div class="space-y-4">
        <Skeleton class="h-4 w-full" />
        <Skeleton class="h-10 w-full" />
        <Skeleton class="h-4 w-full" />
        <Skeleton class="h-20 w-full" />
      </div>
    {:else}
      <form on:submit|preventDefault={handleSave} class="space-y-8">
        {#if BootstrapConfig.shop.shopOpeningHours}
          <div class="space-y-1 md:space-y-2 md:mb-6 mb-4">
            <Label for="opening-hours" class="flex items-center gap-2 mb-1">
              <ClockIcon class="h-4 w-4" />
              {$t("admin.settings.opening-hours")}
            </Label>
            <p class="text-xs text-muted-foreground">
              {$t("admin.settings.opening-hours-description")}
            </p>
            <div class="grid grid-cols-1 md:gap-2 gap-1 !mt-0">
              {#each Object.keys(openingHoursByDay) as day}
                <Label
                  for={`opening-hours-${day}`}
                  class="flex items-center gap-2 md:mt-6 mt-4"
                >
                  {$t(`admin.settings.opening-hours-${day}`)}
                </Label>
                <Input
                  id={`opening-hours-${day}`}
                  type="text"
                  placeholder={closedDaysByDay[day]
                    ? ""
                    : $t(`admin.settings.opening-hours-placeholder`)}
                  disabled={closedDaysByDay[day] || $loading}
                  bind:value={openingHoursByDay[day]}
                />
                <div class="flex items-center justify-start gap-2 mt-1 ml-1">
                  <Checkbox
                    id={`closed-days-${day}`}
                    bind:checked={closedDaysByDay[day]}
                    disabled={$loading}
                    onclick={() => {
                      openingHoursByDay[day] = "";
                    }}
                  />
                  <Label
                    for={`closed-days-${day}`}
                    class="flex items-center gap-2 cursor-pointer"
                  >
                    {$t(`admin.settings.closed-toggle`)}
                  </Label>
                </div>
              {/each}
            </div>
          </div>
        {/if}
        {#if BootstrapConfig.shop.shopAddress}
          <div>
            <Label for="address" class="flex items-center gap-2 mb-1">
              <MapPinIcon class="h-4 w-4" />
              {$t("admin.settings.address")}
            </Label>
            <p class="text-xs text-muted-foreground">
              {$t("admin.settings.address-description")}
            </p>
            <Textarea
              id="address"
              placeholder={$t("admin.settings.address-placeholder")}
              bind:value={address}
              disabled={$saving || $loading}
              class="w-full min-h-48 mt-2"
            />
          </div>
        {/if}
        <!-- Action Buttons -->
        <div class="flex items-center justify-end gap-3 pt-4">
          <Button
            type="button"
            variant="outline"
            disabled={$saving || $loading}
            onclick={reset}
          >
            <RotateCcwIcon class="h-4 w-4" />
            <span class="mx-2">{$t("admin.settings.reset")}</span>
          </Button>
          <Button
            type="submit"
            disabled={!canSave || $loading}
            class="flex items-center gap-2"
          >
            {#if $saving}
              <div
                class="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"
              ></div>
              {$t("admin.settings.saving")}
            {:else}
              <SaveIcon class="h-4 w-4" />
              <span class="mx-2">{$t("admin.settings.save")}</span>
            {/if}
          </Button>
        </div>
      </form>
    {/if}
  </CardContent>
</Card>
