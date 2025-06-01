<script>
  import { browser } from "$app/environment";
  import { writable } from "svelte/store";
  import ClockIcon from "lucide-svelte/icons/clock";
  import { t } from "$lib/i18n";

  let openingHoursByDay = writable({
    monday: $t("common.specifics.openingHours.monday"),
    tuesday: $t("common.specifics.openingHours.tuesday"),
    wednesday: $t("common.specifics.openingHours.wednesday"),
    thursday: $t("common.specifics.openingHours.thursday"),
    friday: $t("common.specifics.openingHours.friday"),
    saturday: $t("common.specifics.openingHours.saturday"),
    sunday: $t("common.specifics.openingHours.sunday"),
  });

  const dayOfWeek = new Date().toLocaleDateString("en-US", { weekday: "long" });
</script>

<div class="mb-4">
  <h3
    class="text-xl md:text-2xl font-semibold text-gray-900 mb-2"
    id="hours-heading"
  >
    <div class="flex items-center gap-2">
      <ClockIcon class="w-5 h-5" aria-hidden="true" />
      {$t("home.location.openingHours.title")}
    </div>
  </h3>
  <div
    class="bg-white rounded-xl px-4 py-2 shadow-sm"
    role="table"
    aria-labelledby="hours-heading"
  >
    {#each Object.entries($openingHoursByDay) as [day, hours]}
      <div
        class="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0 {dayOfWeek.toLowerCase() ===
          day.toLowerCase() && browser
          ? 'bg-gray-50 -mx-2 px-2 rounded-lg font-bold text-gray-900'
          : ''}"
        role="row"
      >
        <div
          class="text-gray-600 {dayOfWeek.toLowerCase() === day.toLowerCase() &&
          browser
            ? 'text-gray-900 font-bold'
            : ''}"
          role="rowheader"
        >
          {$t(`home.location.openingHours.${day}`)}
          {#if dayOfWeek.toLowerCase() === day.toLowerCase() && browser}
            <span class="sr-only">{$t("common.aria.today")}</span>
          {/if}
        </div>
        <div
          class="text-gray-600 {dayOfWeek.toLowerCase() === day.toLowerCase() &&
          browser
            ? 'text-gray-700 font-bold'
            : ''}"
          role="cell"
        >
          {hours ? hours : $t("home.location.openingHours.closed")}
        </div>
      </div>
    {/each}
  </div>
</div>
