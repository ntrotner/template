<script>
  import { t } from "$lib/i18n";
  import { ROUTES } from "$lib/routes";
</script>

<svelte:head>
  <title>{$t("common.imprint")} - {$t("common.specifics.title.main")}</title>
  <meta
    name="description"
    content={$t("common.imprint") + " - " + $t("common.specifics.title.main")}
  />
  <meta name="robots" content="index, follow" />
</svelte:head>

<!-- Skip Navigation -->
<a
  href="/{ROUTES.IMPRINT}/#main-content"
  class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-black text-white px-4 py-2 rounded z-50 focus:outline-none focus:ring-2 focus:ring-white"
>
  {$t("imprint.skip-to-content")}
</a>

<main
  class="break-all"
  id="main-content"
  aria-label={$t("common.aria.main-content")}
>
  <header class="bg-white pt-8 md:pt-12 lg:pt-16 pb-8">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto text-center">
        <h1
          class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight"
        >
          {$t("common.imprint")}
        </h1>
        <p class="text-xl md:text-2xl text-gray-600 leading-relaxed">
          {$t("imprint.subtitle")}
        </p>
      </div>
    </div>
  </header>

  <section
    class="bg-gray-50 py-8 md:py-12 lg:py-16"
    aria-labelledby="legal-info-heading"
  >
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <!-- Skip to content navigation -->
        <nav
          aria-label={$t("imprint.table-of-contents.aria-label")}
          class="mb-8"
        >
          <div class="bg-white rounded-xl shadow-sm p-6">
            <h2 class="text-xl font-semibold text-gray-900 mb-4">
              {$t("imprint.table-of-contents.title")}
            </h2>
            <ul class="space-y-2 text-gray-700">
              <li>
                <a
                  href="/{ROUTES.IMPRINT}/#service-provider"
                  class="text-black hover:text-gray-700 underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 rounded"
                >
                  {$t("imprint.table-of-contents.links.service-provider")}
                </a>
              </li>
              <li>
                <a
                  href="/{ROUTES.IMPRINT}/#contact-info"
                  class="text-black hover:text-gray-700 underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 rounded"
                >
                  {$t("imprint.table-of-contents.links.contact-info")}
                </a>
              </li>
              <li>
                <a
                  href="/{ROUTES.IMPRINT}/#legal-notices"
                  class="text-black hover:text-gray-700 underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 rounded"
                >
                  {$t("imprint.table-of-contents.links.legal-notices")}
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <article>
          <section
            id="service-provider"
            aria-labelledby="service-provider-heading"
            class="mb-8"
          >
            <div class="bg-white rounded-xl shadow-sm p-6 md:p-8">
              <h2
                id="service-provider-heading"
                class="text-2xl md:text-3xl font-bold text-gray-900 mb-6"
              >
                {$t("imprint.sections.service-provider.title")}
              </h2>
              <div class="text-lg text-gray-700 leading-relaxed">
                <address
                  class="not-italic"
                  itemscope
                  itemtype="https://schema.org/Person"
                >
                  <div itemprop="name" class="font-semibold mb-2">
                    {$t("imprint.sections.service-provider.name")}
                  </div>
                  <div
                    itemprop="address"
                    itemscope
                    itemtype="https://schema.org/PostalAddress"
                  >
                    <div itemprop="streetAddress">
                      {$t("imprint.sections.service-provider.address.street")}
                    </div>
                    <div>
                      <span itemprop="postalCode"
                        >{$t(
                          "imprint.sections.service-provider.address.postal-code",
                        )}</span
                      >
                      <span itemprop="addressLocality"
                        >{$t(
                          "imprint.sections.service-provider.address.city",
                        )}</span
                      >
                    </div>
                  </div>
                </address>
              </div>
            </div>
          </section>

          <section
            id="contact-info"
            aria-labelledby="contact-heading"
            class="mb-8"
          >
            <div class="bg-white rounded-xl shadow-sm p-6 md:p-8">
              <h2
                id="contact-heading"
                class="text-2xl md:text-3xl font-bold text-gray-900 mb-6"
              >
                {$t("imprint.sections.contact-info.title")}
              </h2>
              <div class="text-lg text-gray-700 leading-relaxed space-y-4">
                <div
                  role="list"
                  aria-label={$t("imprint.sections.contact-info.aria-label")}
                >
                  <div role="listitem" class="flex items-start space-x-2 mb-3">
                    <span
                      class="font-semibold min-w-0 flex-shrink-0"
                      aria-label={$t(
                        "imprint.sections.contact-info.email.aria-label",
                      )}>{$t("imprint.sections.contact-info.email.label")}</span
                    >
                    <a
                      href="mailto:{$t(
                        'imprint.sections.contact-info.email.address',
                      )}"
                      class="text-black hover:text-gray-700 underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 rounded break-all"
                      aria-label={$t(
                        "imprint.sections.contact-info.email.link-aria-label",
                      )}
                    >
                      {$t("imprint.sections.contact-info.email.address")}
                    </a>
                  </div>
                  <div role="listitem" class="flex items-start space-x-2">
                    <span
                      class="font-semibold min-w-0 flex-shrink-0"
                      aria-label={$t(
                        "imprint.sections.contact-info.phone.aria-label",
                      )}>{$t("imprint.sections.contact-info.phone.label")}</span
                    >
                    <a
                      href="tel:{$t(
                        'imprint.sections.contact-info.phone.tel-number',
                      )}"
                      class="text-black hover:text-gray-700 underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 rounded"
                      aria-label={$t(
                        "imprint.sections.contact-info.phone.link-aria-label",
                      )}
                    >
                      {$t("imprint.sections.contact-info.phone.number")}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            id="legal-notices"
            aria-labelledby="legal-notices-heading"
            class="mb-8"
          >
            <div class="bg-white rounded-xl shadow-sm p-6 md:p-8">
              <h2
                id="legal-notices-heading"
                class="text-2xl md:text-3xl font-bold text-gray-900 mb-6"
              >
                {$t("imprint.sections.legal-notices.title")}
              </h2>
              <div class="text-lg text-gray-700 leading-relaxed space-y-6">
                <div>
                  <h3 class="font-semibold text-gray-900 mb-2">
                    {$t("imprint.sections.legal-notices.copyright.title")}
                  </h3>
                  <p>
                    {$t("imprint.sections.legal-notices.copyright.content")}
                  </p>
                </div>

                <div>
                  <h3 class="font-semibold text-gray-900 mb-2">
                    {$t("imprint.sections.legal-notices.violations.title")}
                  </h3>
                  <p>
                    {$t("imprint.sections.legal-notices.violations.content")}
                  </p>
                </div>
              </div>
            </div>
          </section>
        </article>

        <footer
          class="text-center mt-8"
          aria-label={$t("imprint.footer.aria-label")}
        >
          <div class="bg-white rounded-xl shadow-sm p-6">
            <p class="text-sm text-gray-500">
              <span class="block mb-2 font-medium"
                >{$t("imprint.footer.source-label")}</span
              >
              <a
                href="https://datenschutz-generator.de/"
                class="text-gray-600 hover:text-gray-900 underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-1 rounded"
                target="_blank"
                rel="noopener noreferrer nofollow"
                title={$t("imprint.footer.generator-link.title")}
                aria-label={$t("imprint.footer.generator-link.aria-label")}
              >
                {$t("imprint.footer.generator-link.text")}
              </a>
            </p>
          </div>
        </footer>
      </div>
    </div>
  </section>
</main>
