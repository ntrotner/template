<script>
  import { ROUTES } from "$lib/routes";
  import { BootstrapConfig } from "$lib/bootstrap-config/config";
  import { t } from "$lib/i18n";
  import Home480 from "$lib/assets/home-480.webp";
  import Home800 from "$lib/assets/home-800.webp";
  import { MapIcon } from "@lucide/svelte";
</script>

<header class="bg-white pt-1 md:pt-2 lg:pt-4 pb-6">
  <div class="container mx-auto px-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
      <div class="order-2 md:order-1">
        <h1
          class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight"
        >
          {$t("home.title")}
        </h1>
        <p
          class="text-xl md:text-2xl text-gray-600 mb-4 md:mb-6 leading-relaxed"
        >
          {$t("home.subtitle")}
        </p>

        <nav
          class="flex flex-col md:flex-row gap-4"
          aria-label={$t("common.aria.hero-actions")}
        >
          {#if BootstrapConfig.shop.onlineShop}
            <a
              href={ROUTES.SHOP}
              class="inline-flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg font-semibold transition-colors hover:shadow-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
              aria-label={$t("common.aria.nav-menu.shop")}
            >
              {$t("common.nav-menu.shop")}
            </a>
          {/if}

          {#if BootstrapConfig.shop.shopAddress}
            <a
              href="#location-section"
              class="inline-flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg font-semibold transition-colors hover:shadow-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
              aria-label={$t("common.aria.nav-menu.location")}
            >
              <MapIcon class="mr-2 w-5 h-5" aria-hidden="true" />
              {$t("common.nav-menu.location")}
            </a>
          {/if}
        </nav>
      </div>

      <div class="order-1 md:order-2">
        <div class="relative">
          <img
            src={Home800}
            alt={$t("common.aria.home.image")}
            srcset={`${Home480} 480w, ${Home800} 800w`}
            sizes="(max-width: 640px) 480px,800px"
            class="object-cover rounded-lg shadow-xl"
            width="800"
            height="600"
          />
        </div>
      </div>
    </div>
  </div>
</header>
