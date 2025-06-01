<script>
  import { locale, t } from "$lib/i18n";
  import { derived } from "svelte/store";

  function createShopStructuredData() {
    let structuredData = JSON.stringify({
      "@context": "https://schema.org",
      "@type": $t("seo.businessType"),
      name: $t("seo.title.main"),
      description: $t("seo.title.description"),
      url: $t("seo.url"),
      telephone: $t("seo.telephone"),
      address: {
        "@type": "PostalAddress",
        streetAddress: $t("seo.address.street"),
        addressLocality: $t("seo.address.city"),
        addressRegion: $t("seo.address.region"),
        postalCode: $t("seo.address.postalCode"),
        addressCountry: $t("seo.address.country"),
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: $t("seo.address.latitude"),
        longitude: $t("seo.address.longitude"),
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            $t("seo.openingHours.monday"),
            $t("seo.openingHours.tuesday"),
            $t("seo.openingHours.wednesday"),
            $t("seo.openingHours.thursday"),
            $t("seo.openingHours.friday"),
            $t("seo.openingHours.saturday"),
            $t("seo.openingHours.sunday"),
          ].filter((day) => day !== ""),
          opens: $t("seo.openingHours.core-hours-open"),
          closes: $t("seo.openingHours.core-hours-close"),
        },
      ],
      priceRange: $t("seo.priceRange"),
      image: $t("seo.picture.og"),
    });

    return structuredData;
  }

  let structuredData = derived(locale, () =>
    JSON.stringify(createShopStructuredData()),
  );
</script>

<svelte:head>
  <script
    type="application/ld+json"
    contenteditable
    bind:innerHTML={$structuredData}
  ></script>
</svelte:head>
