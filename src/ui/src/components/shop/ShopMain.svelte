<script>
  import { BootstrapConfig } from "$lib/bootstrap-config/config";
  import OpeningHours from "./OpeningHours.svelte";
  import ShopAddress from "./ShopAddress.svelte";
  import { t } from "$lib/i18n";
  import Location480 from "$lib/assets/location-480.webp";
  import Location800 from "$lib/assets/location-800.webp";
</script>

<section
  class="bg-gray-50 lg:mt-6 pt-4 md:pt-6 lg:pt-8 pb-6 rounded-xl"
  id="location-section"
  aria-labelledby="location-heading"
>
  <div class="container mx-auto px-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 items-start">
      <div class="md:order-1">
        <h2
          id="location-heading"
          class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight"
        >
          {$t("home.location.title")}
        </h2>

        {#if BootstrapConfig.shop.shopAddress}
          <ShopAddress />
        {/if}

        {#if BootstrapConfig.shop.shopOpeningHours}
          <OpeningHours />
        {/if}
      </div>
      <div class="h-full relative md:order-0">
        <img
          src={Location800}
          alt={$t("common.aria.location.image")}
          srcset={`${Location480} 480w, ${Location800} 800w`}
          sizes="(max-width: 640px) 480px,800px"
          class="object-cover rounded-lg shadow-xl h-full"
          loading="lazy"
          width="800"
          height="600"
        />
      </div>
    </div>
  </div>
</section>
