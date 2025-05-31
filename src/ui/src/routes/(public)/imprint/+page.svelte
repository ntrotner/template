<script>
  import { t } from "$lib/i18n";
  import { ROUTES } from "$lib/routes";
</script>

<svelte:head>
  <title>{$t("common.impressum")} - {$t("common.specifics.title.main")}</title>
  <meta
    name="description"
    content={$t("common.impressum") + " - " + $t("common.specifics.title.main")}
  />
  <meta name="robots" content="index, follow" />
</svelte:head>

<main id="main-content" role="main" aria-label={$t("common.aria.main-content")}>
  <header class="bg-white pt-8 md:pt-12 lg:pt-16 pb-8" role="banner">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto text-center">
        <h1
          class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight"
        >
          {$t("common.impressum")}
        </h1>
        <p class="text-xl md:text-2xl text-gray-600 leading-relaxed">
          Rechtliche Informationen und Kontaktdaten
        </p>
      </div>
    </div>
  </header>

  <section
    class="bg-gray-50 py-8 md:py-12 lg:py-16"
    aria-labelledby="legal-info-heading"
    role="region"
  >
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <!-- Skip to content navigation -->
        <nav aria-label="Inhaltsverzeichnis" class="mb-8">
          <div class="bg-white rounded-xl shadow-sm p-6">
            <h2 class="text-xl font-semibold text-gray-900 mb-4">
              Inhaltsverzeichnis
            </h2>
            <ul class="space-y-2 text-gray-700">
              <li>Angaben gemäß § 5 TMG</li>
              <li>Kontakt</li>
              <li>Umsatzsteuer-ID</li>
              <li>Berufsbezeichnung</li>
              <li>Verbraucherstreitbeilegung</li>
            </ul>
          </div>
        </nav>

        <article role="article">
          <section
            id="company-info"
            aria-labelledby="company-info-heading"
            class="mb-8"
          >
            <div class="bg-white rounded-xl shadow-sm p-6 md:p-8">
              <h2
                id="company-info-heading"
                class="text-2xl md:text-3xl font-bold text-gray-900 mb-6 break-all"
              >
                Angaben gemäß § 5 TMG
              </h2>
              <div class="text-lg text-gray-700 leading-relaxed">
                <address
                  class="not-italic"
                  itemscope
                  itemtype="https://schema.org/Organization"
                >
                  <div itemprop="name" class="font-semibold">
                    Max Mustermann
                  </div>
                  <div itemprop="description">
                    Musterladen (Einzelunternehmer)
                  </div>
                  <div
                    itemprop="address"
                    itemscope
                    itemtype="https://schema.org/PostalAddress"
                  >
                    <div itemprop="streetAddress">Musterstraße 111</div>
                    <div>Gebäude 44</div>
                    <div>
                      <span itemprop="postalCode">90210</span>
                      <span itemprop="addressLocality">Musterstadt</span>
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
                class="text-2xl md:text-3xl font-bold text-gray-900 mb-6 break-all"
              >
                Kontakt
              </h2>
              <div class="text-lg text-gray-700 leading-relaxed space-y-4">
                <div role="list" aria-label="Kontaktmöglichkeiten">
                  <div role="listitem" class="flex items-start space-x-2">
                    <span
                      class="font-semibold min-w-0 flex-shrink-0"
                      aria-label="Telefonnummer">Telefon:</span
                    >
                    <a
                      href="tel:+4912344556"
                      class="text-black hover:text-gray-700 underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 rounded"
                      aria-label="Telefon +49 (0) 123 44 55 66 anrufen"
                    >
                      +49 (0) 123 44 55 66
                    </a>
                  </div>
                  <div role="listitem" class="flex items-start space-x-2">
                    <span
                      class="font-semibold min-w-0 flex-shrink-0"
                      aria-label="Faxnummer">Telefax:</span
                    >
                    <span>+49 (0) 123 44 55 99</span>
                  </div>
                  <div role="listitem" class="flex items-start space-x-2">
                    <span
                      class="font-semibold min-w-0 flex-shrink-0"
                      aria-label="E-Mail-Adresse">E-Mail:</span
                    >
                    <a
                      href="mailto:mustermann@musterfirma.de"
                      class="text-black hover:text-gray-700 underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 rounded break-all"
                      aria-label="E-Mail an mustermann@musterfirma.de senden"
                    >
                      mustermann@musterfirma.de
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="tax-info" aria-labelledby="tax-heading" class="mb-8">
            <div class="bg-white rounded-xl shadow-sm p-6 md:p-8">
              <h2
                id="tax-heading"
                class="text-2xl md:text-3xl font-bold text-gray-900 mb-6 break-all"
              >
                Umsatzsteuer-ID
              </h2>
              <div class="text-lg text-gray-700 leading-relaxed">
                <p>
                  <span class="block mb-2"
                    >Umsatzsteuer-Identifikationsnummer gemäß § 27 a
                    Umsatzsteuergesetz:</span
                  >
                  <strong
                    class="text-gray-900"
                    aria-label="Umsatzsteuer-ID DE999999999">DE999999999</strong
                  >
                </p>
              </div>
            </div>
          </section>

          <section
            id="professional-info"
            aria-labelledby="professional-heading"
            class="mb-8"
          >
            <div class="bg-white rounded-xl shadow-sm p-6 md:p-8">
              <h2
                id="professional-heading"
                class="text-2xl md:text-3xl font-bold text-gray-900 mb-6 break-all"
              >
                Berufsbezeichnung und berufsrechtliche Regelungen
              </h2>
              <div class="text-lg text-gray-700 leading-relaxed">
                <p>
                  <span class="font-semibold block mb-1"
                    >Berufsbezeichnung:</span
                  >
                  <span>anderer Beruf</span>
                </p>
              </div>
            </div>
          </section>

          <section
            id="dispute-resolution"
            aria-labelledby="dispute-heading"
            class="mb-8"
          >
            <div class="bg-white rounded-xl shadow-sm p-6 md:p-8">
              <h2
                id="dispute-heading"
                class="text-2xl md:text-3xl font-bold text-gray-900 mb-6 break-all"
              >
                Verbraucherstreitbeilegung/Universalschlichtungsstelle
              </h2>
              <div class="text-lg text-gray-700 leading-relaxed">
                <p>
                  Wir sind nicht bereit oder verpflichtet, an
                  Streitbeilegungsverfahren vor einer
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </div>
            </div>
          </section>
        </article>

        <footer
          class="text-center mt-8"
          role="contentinfo"
          aria-label="Quellenangabe"
        >
          <p class="text-sm text-gray-500">
            <span class="block mb-1">Quelle:</span>
            <a
              href="https://www.e-recht24.de"
              class="text-gray-600 hover:text-gray-900 underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-1 rounded"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="eRecht24 Website besuchen (öffnet in neuem Tab)"
            >
              eRecht24
            </a>
          </p>
        </footer>
      </div>
    </div>
  </section>
</main>
