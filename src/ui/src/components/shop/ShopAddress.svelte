<script>
  import { writable } from "svelte/store";
  import PinIcon from "lucide-svelte/icons/map-pin";
  import { t } from "$lib/i18n";

  let street = writable($t("common.specifics.address.street"));
  let postalCode = writable($t("common.specifics.address.postalCode"));
  let city = writable($t("common.specifics.address.city"));
  let region = writable($t("common.specifics.address.region"));
</script>

<div class="mb-4 md:mb-8">
  <h3
    class="text-xl md:text-2xl font-semibold text-gray-900 mb-2"
    id="address-heading"
  >
    <div class="flex items-center gap-2">
      <PinIcon class="w-5 h-5" aria-hidden="true" />
      {$t("home.location.address.title")}
    </div>
  </h3>
  <address
    class="not-italic pl-6"
    itemscope
    itemtype="https://schema.org/PostalAddress"
    aria-labelledby="address-heading"
  >
    <div class="text-lg text-gray-700 leading-relaxed">
      <div itemprop="streetAddress" class="font-medium">
        {$street}
      </div>
      <div>
        <span itemprop="postalCode">{$postalCode}</span>
        <span itemprop="addressLocality">
          {$city}
        </span>
        <br />
        <span itemprop="addressRegion">{$region}</span>
      </div>
    </div>
  </address>
</div>
