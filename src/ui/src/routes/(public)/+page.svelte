<script>
  import { browser } from "$app/environment";
  import { ROUTES } from "$lib/routes";
  import { BootstrapConfig } from "$lib/bootstrap-config/config";
  import { t } from "$lib/i18n";
  import { writable } from "svelte/store";
  import Location from "$lib/assets/location.webp";
  import Home from "$lib/assets/home.webp";
  import MailIcon from "lucide-svelte/icons/mail";
  import PinIcon from "lucide-svelte/icons/map-pin";
  import ClockIcon from "lucide-svelte/icons/clock";
  import MapIcon from "lucide-svelte/icons/map";
  import PhoneIcon from "lucide-svelte/icons/phone";

  let openingHoursByDay = writable({
    monday: $t("common.specifics.openingHours.monday"),
    tuesday: $t("common.specifics.openingHours.tuesday"),
    wednesday: $t("common.specifics.openingHours.wednesday"),
    thursday: $t("common.specifics.openingHours.thursday"),
    friday: $t("common.specifics.openingHours.friday"),
    saturday: $t("common.specifics.openingHours.saturday"),
    sunday: $t("common.specifics.openingHours.sunday"),
  });

  let street = writable($t("common.specifics.address.street"));
  let postalCode = writable($t("common.specifics.address.postalCode"));
  let city = writable($t("common.specifics.address.city"));
  let region = writable($t("common.specifics.address.region"));

  const dayOfWeek = new Date().toLocaleDateString("en-US", { weekday: "long" });

  let structuredData = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: $t("common.specifics.title.main"),
    description: $t("common.specifics.title.description"),
    url: $t("common.specifics.url"),
    telephone: $t("common.specifics.telephone"),
    address: {
      "@type": "PostalAddress",
      streetAddress: $t("common.specifics.address.street"),
      addressLocality: $t("common.specifics.address.city"),
      addressRegion: $t("common.specifics.address.region"),
      postalCode: $t("common.specifics.address.postalCode"),
      addressCountry: $t("common.specifics.address.country"),
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: $t("common.specifics.address.latitude"),
      longitude: $t("common.specifics.address.longitude"),
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: "17:00",
      },
    ],
    priceRange: $t("common.specifics.priceRange"),
    image: $t("common.specifics.picture.url"),
  });
</script>

<svelte:head>
  <title
    >{$t("common.specifics.title.main")} - {$t(
      "common.specifics.title.sub",
    )}</title
  >
  <meta name="description" content={$t("common.specifics.title.description")} />
  <meta
    name="keywords"
    content="local shop, retail store, online shopping, downtown store, quality products"
  />
  <meta name="author" content={$t("common.specifics.title.main")} />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <!-- Canonical URL -->
  <link rel="canonical" href={$t("common.specifics.picture.url")} />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content={$t("common.specifics.picture.url")} />
  <meta
    property="og:title"
    content="{$t('common.specifics.title.main')} - {$t(
      'common.specifics.title.sub',
    )}"
  />
  <meta
    property="og:description"
    content={$t("common.specifics.title.description")}
  />
  <meta property="og:image" content={$t("common.specifics.picture.url")} />
  <meta property="og:site_name" content={$t("common.specifics.title.main")} />
  <meta property="og:locale" content="de_DE" />

  <!-- Twitter -->
  <meta property="twitter:card" content={$t("common.specifics.picture.card")} />
  <meta property="twitter:url" content={$t("common.specifics.url")} />
  <meta
    property="twitter:title"
    content="{$t('common.specifics.title.main')} - {$t(
      'common.specifics.title.sub',
    )}"
  />
  <meta
    property="twitter:description"
    content={$t("common.specifics.title.description")}
  />
  <meta property="twitter:image" content={$t("common.specifics.picture.url")} />

  <!-- Additional SEO -->
  <meta name="robots" content="index, follow" />
  <meta name="googlebot" content="index, follow" />
  <link
    rel="icon"
    type="image/x-icon"
    href={$t("common.specifics.picture.favicon")}
  />

  <!-- Structured Data for Local Business -->
  <script
    type="application/ld+json"
    contenteditable
    bind:innerHTML={structuredData}
  ></script>
</svelte:head>

<main>
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

          <div class="flex flex-col md:flex-row gap-4">
            {#if BootstrapConfig.app.onlineShop}
              <a
                href={ROUTES.SHOP}
                class="inline-flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg font-semibold transition-colors hover:shadow-lg cursor-pointer"
                aria-label="Browse our online shop and products"
              >
                {$t("common.nav-menu.shop")}
              </a>
            {/if}

            <a
              class="inline-flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg font-semibold transition-colors hover:shadow-lg cursor-pointer"
              aria-label="Get directions to our store"
            >
              <MapIcon class="mr-2 w-5 h-5" />

              {$t("common.nav-menu.location")}
            </a>
          </div>
        </div>

        <div class="order-1 md:order-2">
          <div class="relative">
            <img
              src={Home}
              alt="Modern retail store interior showcasing our welcoming shopping environment"
              class="w-full h-[200px] md:h-[350px] lg:h-[400px] object-cover rounded-lg shadow-xl"
              loading="eager"
              width="800"
              height="600"
            />
          </div>
        </div>
      </div>
    </div>
  </header>

  {#if BootstrapConfig.app.shopAddress || BootstrapConfig.app.shopOpeningHours}
    <section class="bg-gray-50 lg:mt-6 pt-4 md:pt-6 lg:pt-8 pb-6 rounded-xl">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 items-start">
          <div class="md:order-1">
            <h2
              class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight"
            >
              {$t("home.location.title")}
            </h2>

            {#if BootstrapConfig.app.shopAddress}
              <div class="mb-4 md:mb-8">
                <h3
                  class="text-xl md:text-2xl font-semibold text-gray-900 mb-2"
                >
                  <div class="flex items-center gap-2">
                    <PinIcon class="w-5 h-5" />
                    {$t("home.location.address.title")}
                  </div>
                </h3>
                <address
                  class="not-italic pl-6"
                  itemscope
                  itemtype="https://schema.org/PostalAddress"
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
            {/if}

            {#if BootstrapConfig.app.shopOpeningHours}
              <div class="mb-4">
                <h3
                  class="text-xl md:text-2xl font-semibold text-gray-900 mb-2"
                >
                  <div class="flex items-center gap-2">
                    <ClockIcon class="w-5 h-5" />
                    {$t("home.location.openingHours.title")}
                  </div>
                </h3>
                <div class="bg-white rounded-xl px-4 py-2 shadow-sm">
                  <dl>
                    {#each Object.entries($openingHoursByDay) as [day, hours]}
                      <div
                        class="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0 {dayOfWeek.toLowerCase() ===
                          day.toLowerCase() && browser
                          ? 'bg-gray-50 -mx-2 px-2 rounded-lg font-bold text-gray-900'
                          : ''}"
                      >
                        <dt
                          class="text-gray-600 {dayOfWeek.toLowerCase() ===
                            day.toLowerCase() && browser
                            ? 'text-gray-900 font-bold'
                            : ''}"
                        >
                          {$t(`home.location.openingHours.${day}`)}
                        </dt>
                        <dd
                          class="text-gray-600 {dayOfWeek.toLowerCase() ===
                            day.toLowerCase() && browser
                            ? 'text-gray-700 font-bold'
                            : ''}"
                        >
                          {hours
                            ? hours
                            : $t("home.location.openingHours.closed")}
                        </dd>
                      </div>
                    {/each}
                  </dl>
                </div>
              </div>
            {/if}
          </div>
          <div class="relative md:order-0">
            <img
              src={Location}
              alt="Aerial view of our store location showing surrounding area and landmarks for easy navigation"
              class="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-lg shadow-xl"
              loading="lazy"
              width="800"
              height="600"
            />
          </div>
        </div>
      </div>
    </section>
  {/if}

  <section class="bg-white my-2 lg:my-6 pt-4 pb-6 rounded-xl">
    <div class="container mx-auto px-4">
      <div class="flex flex-col items-center">
        <div>
          <h2
            class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight"
          >
            {$t("home.contact.title")}
          </h2>
          <p class="text-xl text-gray-600 mb-10 leading-relaxed">
            {$t("home.contact.subtitle")}
          </p>

          <div class="space-y-6 mb-10">
            <div class="flex items-center space-x-4">
              <div class="bg-gray-100 p-3 rounded-lg">
                <MailIcon class="w-6 h-6 text-black" />
              </div>
              <div>
                <h3 class="font-semibold text-gray-900">
                  {$t("home.contact.email.title")}
                </h3>
                <a
                  href="mailto:{$t('common.specifics.email')}"
                  class="text-black hover:text-gray-700"
                >
                  {$t("common.specifics.email")}
                </a>
              </div>
            </div>

            <div class="flex items-center space-x-4">
              <div class="bg-gray-100 p-3 rounded-lg">
                <PhoneIcon class="w-6 h-6 text-black" />
              </div>
              <div>
                <h3 class="font-semibold text-gray-900">
                  {$t("home.contact.phone.title")}
                </h3>
                <a
                  href="tel:{$t('common.specifics.telephone')}"
                  class="text-black hover:text-gray-700"
                >
                  {$t("common.specifics.telephone")}
                </a>
              </div>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="flex flex-col gap-4">
            <a
              href="mailto:info@example.com"
              class="inline-flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg font-semibold transition-colors hover:shadow-lg cursor-pointer"
              aria-label="Send us an email"
            >
              <MailIcon class="mr-2 w-5 h-5" />
              {$t("common.nav-menu.contact")}
            </a>
            <a
              href="tel:{$t('common.specifics.telephone')}"
              class="inline-flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg font-semibold transition-colors hover:shadow-lg cursor-pointer"
              aria-label="Send us an email"
            >
              <PhoneIcon class="mr-2 w-5 h-5" />
              {$t("common.nav-menu.call")}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>
