<script>
  import { t } from "$lib/i18n";
  import { ROUTES } from "$lib/routes";
</script>

<svelte:head>
  <title>{$t("privacy.title")} - {$t("common.specifics.title.main")}</title>
  <meta
    name="description"
    content="{$t('privacy.title')} - {$t('common.specifics.title.main')}"
  />
  <meta name="robots" content="index, follow" />
</svelte:head>

<!-- Skip Navigation -->
<a
  href="/{ROUTES.PRIVACY}/#main-content"
  class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-black text-white px-4 py-2 rounded z-50 focus:outline-none focus:ring-2 focus:ring-white"
>
  {$t("privacy.skip-to-content")}
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
          class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight break-all"
        >
          {$t("privacy.title")}
        </h1>
        <p class="text-xl md:text-2xl text-gray-600 leading-relaxed">
          {$t("privacy.subtitle")}
        </p>
      </div>
    </div>
  </header>

  <section
    class="bg-gray-50 py-8 md:py-12 lg:py-16"
    aria-labelledby="privacy-info-heading"
  >
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <!-- Skip to content navigation -->
        <nav
          aria-label={$t("privacy.table-of-contents.aria-label")}
          class="mb-8"
        >
          <div class="bg-white rounded-xl shadow-sm p-6">
            <h2 class="text-xl font-semibold text-gray-900 mb-4">
              {$t("privacy.table-of-contents.title")}
            </h2>
            <ul
              class="space-y-2 text-gray-700 grid grid-cols-1 md:grid-cols-2 gap-2"
            >
              <li>
                <a
                  href="/{ROUTES.PRIVACY}/#preamble"
                  class="text-black hover:text-gray-700 underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 rounded"
                >
                  {$t("privacy.table-of-contents.links.preamble")}
                </a>
              </li>
              <li>
                <a
                  href="/{ROUTES.PRIVACY}/#responsible-party"
                  class="text-black hover:text-gray-700 underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 rounded"
                >
                  {$t("privacy.table-of-contents.links.responsible-party")}
                </a>
              </li>
              <li>
                <a
                  href="/{ROUTES.PRIVACY}/#processing-overview"
                  class="text-black hover:text-gray-700 underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 rounded"
                >
                  {$t("privacy.table-of-contents.links.processing-overview")}
                </a>
              </li>
              <li>
                <a
                  href="/{ROUTES.PRIVACY}/#legal-basis"
                  class="text-black hover:text-gray-700 underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 rounded"
                >
                  {$t("privacy.table-of-contents.links.legal-basis")}
                </a>
              </li>
              <li>
                <a
                  href="/{ROUTES.PRIVACY}/#security-measures"
                  class="text-black hover:text-gray-700 underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 rounded"
                >
                  {$t("privacy.table-of-contents.links.security-measures")}
                </a>
              </li>
              <li>
                <a
                  href="/{ROUTES.PRIVACY}/#data-storage"
                  class="text-black hover:text-gray-700 underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 rounded"
                >
                  {$t("privacy.table-of-contents.links.data-storage")}
                </a>
              </li>
              <li>
                <a
                  href="/{ROUTES.PRIVACY}/#user-rights"
                  class="text-black hover:text-gray-700 underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 rounded"
                >
                  {$t("privacy.table-of-contents.links.user-rights")}
                </a>
              </li>
              <li>
                <a
                  href="/{ROUTES.PRIVACY}/#web-hosting"
                  class="text-black hover:text-gray-700 underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 rounded"
                >
                  {$t("privacy.table-of-contents.links.web-hosting")}
                </a>
              </li>
              <li>
                <a
                  href="/{ROUTES.PRIVACY}/#cookies"
                  class="text-black hover:text-gray-700 underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 rounded"
                >
                  {$t("privacy.table-of-contents.links.cookies")}
                </a>
              </li>
              <li>
                <a
                  href="/{ROUTES.PRIVACY}/#contact-management"
                  class="text-black hover:text-gray-700 underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 rounded"
                >
                  {$t("privacy.table-of-contents.links.contact-management")}
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <article>
          <section
            id="preamble"
            aria-labelledby="preamble-heading"
            class="mb-8"
          >
            <div class="bg-white rounded-xl shadow-sm p-6 md:p-8">
              <h2
                id="preamble-heading"
                class="text-2xl md:text-3xl font-bold text-gray-900 mb-6"
              >
                {$t("privacy.sections.preamble.title")}
              </h2>
              <div class="text-lg text-gray-700 leading-relaxed space-y-4">
                <p>
                  {$t("privacy.sections.preamble.content.intro")}
                </p>
                <p>
                  {$t("privacy.sections.preamble.content.gender-neutral")}
                </p>
                <p>
                  <strong
                    >{$t(
                      "privacy.sections.preamble.content.date-label",
                    )}</strong
                  >
                  {$t("privacy.sections.preamble.content.date")}
                </p>
              </div>
            </div>
          </section>

          <section
            id="responsible-party"
            aria-labelledby="responsible-party-heading"
            class="mb-8"
          >
            <div class="bg-white rounded-xl shadow-sm p-6 md:p-8">
              <h2
                id="responsible-party-heading"
                class="text-2xl md:text-3xl font-bold text-gray-900 mb-6"
              >
                {$t("privacy.sections.responsible-party.title")}
              </h2>
              <div class="text-lg text-gray-700 leading-relaxed">
                <address
                  class="not-italic"
                  itemscope
                  itemtype="https://schema.org/Person"
                >
                  <div>
                    {$t("privacy.sections.responsible-party.contact.name")}
                  </div>
                  <div>
                    {$t("privacy.sections.responsible-party.contact.address")}
                  </div>
                  <div>
                    {$t("privacy.sections.responsible-party.contact.location")}
                  </div>
                  <div class="mt-4">
                    <span class="font-semibold"
                      >{$t(
                        "privacy.sections.responsible-party.contact.email-label",
                      )}</span
                    >
                    <a
                      href="mailto:{$t(
                        'privacy.sections.responsible-party.contact.email',
                      )}"
                      class="text-black hover:text-gray-700 underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 rounded break-all ml-1"
                      aria-label={$t(
                        "privacy.sections.responsible-party.contact.email-aria-label",
                      )}
                    >
                      {$t("privacy.sections.responsible-party.contact.email")}
                    </a>
                  </div>
                </address>
              </div>
            </div>
          </section>

          <section
            id="processing-overview"
            aria-labelledby="processing-overview-heading"
            class="mb-8"
          >
            <div class="bg-white rounded-xl shadow-sm p-6 md:p-8">
              <h2
                id="processing-overview-heading"
                class="text-2xl md:text-3xl font-bold text-gray-900 mb-6"
              >
                {$t("privacy.sections.processing-overview.title")}
              </h2>
              <div class="text-lg text-gray-700 leading-relaxed space-y-6">
                <p>
                  {$t("privacy.sections.processing-overview.intro")}
                </p>

                <div>
                  <h3 class="text-xl font-semibold text-gray-900 mb-3">
                    {$t(
                      "privacy.sections.processing-overview.data-types.title",
                    )}
                  </h3>
                  <ul class="list-disc list-inside space-y-1">
                    <li>
                      {$t(
                        "privacy.sections.processing-overview.data-types.item1",
                      )}
                    </li>
                    <li>
                      {$t(
                        "privacy.sections.processing-overview.data-types.item2",
                      )}
                    </li>
                    <li>
                      {$t(
                        "privacy.sections.processing-overview.data-types.item3",
                      )}
                    </li>
                    <li>
                      {$t(
                        "privacy.sections.processing-overview.data-types.item4",
                      )}
                    </li>
                    <li>
                      {$t(
                        "privacy.sections.processing-overview.data-types.item5",
                      )}
                    </li>
                    <li>
                      {$t(
                        "privacy.sections.processing-overview.data-types.item6",
                      )}
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 class="text-xl font-semibold text-gray-900 mb-3">
                    {$t(
                      "privacy.sections.processing-overview.affected-persons.title",
                    )}
                  </h3>
                  <ul class="list-disc list-inside space-y-1">
                    <li>
                      {$t(
                        "privacy.sections.processing-overview.affected-persons.item1",
                      )}
                    </li>
                    <li>
                      {$t(
                        "privacy.sections.processing-overview.affected-persons.item2",
                      )}
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 class="text-xl font-semibold text-gray-900 mb-3">
                    {$t(
                      "privacy.sections.processing-overview.processing-purposes.title",
                    )}
                  </h3>
                  <ul class="list-disc list-inside space-y-1">
                    <li>
                      {$t(
                        "privacy.sections.processing-overview.processing-purposes.item1",
                      )}
                    </li>
                    <li>
                      {$t(
                        "privacy.sections.processing-overview.processing-purposes.item2",
                      )}
                    </li>
                    <li>
                      {$t(
                        "privacy.sections.processing-overview.processing-purposes.item3",
                      )}
                    </li>
                    <li>
                      {$t(
                        "privacy.sections.processing-overview.processing-purposes.item4",
                      )}
                    </li>
                    <li>
                      {$t(
                        "privacy.sections.processing-overview.processing-purposes.item5",
                      )}
                    </li>
                    <li>
                      {$t(
                        "privacy.sections.processing-overview.processing-purposes.item6",
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section
            id="legal-basis"
            aria-labelledby="legal-basis-heading"
            class="mb-8"
          >
            <div class="bg-white rounded-xl shadow-sm p-6 md:p-8">
              <h2
                id="legal-basis-heading"
                class="text-2xl md:text-3xl font-bold text-gray-900 mb-6"
              >
                {$t("privacy.sections.legal-basis.title")}
              </h2>
              <div class="text-lg text-gray-700 leading-relaxed space-y-4">
                <p>
                  <strong
                    >{$t("privacy.sections.legal-basis.intro-label")}</strong
                  >
                  {$t("privacy.sections.legal-basis.intro")}
                </p>

                <ul class="space-y-3">
                  <li>
                    <strong
                      >{$t(
                        "privacy.sections.legal-basis.legal-ground1.title",
                      )}</strong
                    >
                    - {$t(
                      "privacy.sections.legal-basis.legal-ground1.description",
                    )}
                  </li>
                  <li>
                    <strong
                      >{$t(
                        "privacy.sections.legal-basis.legal-ground2.title",
                      )}</strong
                    >
                    - {$t(
                      "privacy.sections.legal-basis.legal-ground2.description",
                    )}
                  </li>
                  <li>
                    <strong
                      >{$t(
                        "privacy.sections.legal-basis.legal-ground3.title",
                      )}</strong
                    >
                    - {$t(
                      "privacy.sections.legal-basis.legal-ground3.description",
                    )}
                  </li>
                </ul>

                <div class="bg-gray-50 p-4 rounded-lg">
                  <h3 class="font-semibold text-gray-900 mb-2">
                    {$t(
                      "privacy.sections.legal-basis.national-regulations.title",
                    )}
                  </h3>
                  <p>
                    {$t(
                      "privacy.sections.legal-basis.national-regulations.content",
                    )}
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section
            id="security-measures"
            aria-labelledby="security-measures-heading"
            class="mb-8"
          >
            <div class="bg-white rounded-xl shadow-sm p-6 md:p-8">
              <h2
                id="security-measures-heading"
                class="text-2xl md:text-3xl font-bold text-gray-900 mb-6"
              >
                {$t("privacy.sections.security-measures.title")}
              </h2>
              <div class="text-lg text-gray-700 leading-relaxed space-y-4">
                <p>
                  {$t("privacy.sections.security-measures.intro")}
                </p>

                <div class="bg-blue-50 p-4 rounded-lg">
                  <h3 class="font-semibold text-gray-900 mb-2">
                    {$t("privacy.sections.security-measures.tls-ssl.title")}
                  </h3>
                  <p>
                    {$t("privacy.sections.security-measures.tls-ssl.content")}
                  </p>
                </div>

                <div class="bg-green-50 p-4 rounded-lg">
                  <h3 class="font-semibold text-gray-900 mb-2">
                    {$t("privacy.sections.security-measures.ip-masking.title")}
                  </h3>
                  <p>
                    {$t(
                      "privacy.sections.security-measures.ip-masking.content",
                    )}
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section
            id="data-storage"
            aria-labelledby="data-storage-heading"
            class="mb-8"
          >
            <div class="bg-white rounded-xl shadow-sm p-6 md:p-8">
              <h2
                id="data-storage-heading"
                class="text-2xl md:text-3xl font-bold text-gray-900 mb-6"
              >
                {$t("privacy.sections.data-storage.title")}
              </h2>
              <div class="text-lg text-gray-700 leading-relaxed space-y-4">
                <p>
                  {$t("privacy.sections.data-storage.intro")}
                </p>

                <div class="bg-yellow-50 p-4 rounded-lg">
                  <h3 class="font-semibold text-gray-900 mb-2">
                    {$t(
                      "privacy.sections.data-storage.retention-periods.title",
                    )}
                  </h3>
                  <ul class="list-disc list-inside space-y-2 text-sm">
                    <li>
                      <strong
                        >{$t(
                          "privacy.sections.data-storage.retention-periods.item1-period",
                        )}</strong
                      >
                      {$t(
                        "privacy.sections.data-storage.retention-periods.item1-description",
                      )}
                    </li>
                    <li>
                      <strong
                        >{$t(
                          "privacy.sections.data-storage.retention-periods.item2-period",
                        )}</strong
                      >
                      {$t(
                        "privacy.sections.data-storage.retention-periods.item2-description",
                      )}
                    </li>
                    <li>
                      <strong
                        >{$t(
                          "privacy.sections.data-storage.retention-periods.item3-period",
                        )}</strong
                      >
                      {$t(
                        "privacy.sections.data-storage.retention-periods.item3-description",
                      )}
                    </li>
                    <li>
                      <strong
                        >{$t(
                          "privacy.sections.data-storage.retention-periods.item4-period",
                        )}</strong
                      >
                      {$t(
                        "privacy.sections.data-storage.retention-periods.item4-description",
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section
            id="user-rights"
            aria-labelledby="user-rights-heading"
            class="mb-8"
          >
            <div class="bg-white rounded-xl shadow-sm p-6 md:p-8">
              <h2
                id="user-rights-heading"
                class="text-2xl md:text-3xl font-bold text-gray-900 mb-6"
              >
                {$t("privacy.sections.user-rights.title")}
              </h2>
              <div class="text-lg text-gray-700 leading-relaxed space-y-4">
                <p>
                  {$t("privacy.sections.user-rights.intro")}
                </p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div class="bg-gray-50 p-4 rounded-lg">
                    <h3 class="font-semibold text-gray-900 mb-2">
                      {$t("privacy.sections.user-rights.right1.title")}
                    </h3>
                    <p class="text-sm">
                      {$t("privacy.sections.user-rights.right1.description")}
                    </p>
                  </div>
                  <div class="bg-gray-50 p-4 rounded-lg">
                    <h3 class="font-semibold text-gray-900 mb-2">
                      {$t("privacy.sections.user-rights.right2.title")}
                    </h3>
                    <p class="text-sm">
                      {$t("privacy.sections.user-rights.right2.description")}
                    </p>
                  </div>
                  <div class="bg-gray-50 p-4 rounded-lg">
                    <h3 class="font-semibold text-gray-900 mb-2">
                      {$t("privacy.sections.user-rights.right3.title")}
                    </h3>
                    <p class="text-sm">
                      {$t("privacy.sections.user-rights.right3.description")}
                    </p>
                  </div>
                  <div class="bg-gray-50 p-4 rounded-lg">
                    <h3 class="font-semibold text-gray-900 mb-2">
                      {$t("privacy.sections.user-rights.right4.title")}
                    </h3>
                    <p class="text-sm">
                      {$t("privacy.sections.user-rights.right4.description")}
                    </p>
                  </div>
                  <div class="bg-gray-50 p-4 rounded-lg">
                    <h3 class="font-semibold text-gray-900 mb-2">
                      {$t("privacy.sections.user-rights.right5.title")}
                    </h3>
                    <p class="text-sm">
                      {$t("privacy.sections.user-rights.right5.description")}
                    </p>
                  </div>
                  <div class="bg-gray-50 p-4 rounded-lg">
                    <h3 class="font-semibold text-gray-900 mb-2">
                      {$t("privacy.sections.user-rights.right6.title")}
                    </h3>
                    <p class="text-sm">
                      {$t("privacy.sections.user-rights.right6.description")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            id="web-hosting"
            aria-labelledby="web-hosting-heading"
            class="mb-8"
          >
            <div class="bg-white rounded-xl shadow-sm p-6 md:p-8">
              <h2
                id="web-hosting-heading"
                class="text-2xl md:text-3xl font-bold text-gray-900 mb-6"
              >
                {$t("privacy.sections.web-hosting.title")}
              </h2>
              <div class="text-lg text-gray-700 leading-relaxed space-y-4">
                <p>
                  {$t("privacy.sections.web-hosting.intro")}
                </p>

                <div class="bg-red-50 p-4 rounded-lg">
                  <h3 class="font-semibold text-gray-900 mb-2">
                    {$t("privacy.sections.web-hosting.server-logs.title")}
                  </h3>
                  <p class="text-sm">
                    {$t("privacy.sections.web-hosting.server-logs.content")}
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="cookies" aria-labelledby="cookies-heading" class="mb-8">
            <div class="bg-white rounded-xl shadow-sm p-6 md:p-8">
              <h2
                id="cookies-heading"
                class="text-2xl md:text-3xl font-bold text-gray-900 mb-6"
              >
                {$t("privacy.sections.cookies.title")}
              </h2>
              <div class="text-lg text-gray-700 leading-relaxed space-y-4">
                <p>
                  {$t("privacy.sections.cookies.intro")}
                </p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div class="bg-blue-50 p-4 rounded-lg">
                    <h3 class="font-semibold text-gray-900 mb-2">
                      {$t("privacy.sections.cookies.type1.title")}
                    </h3>
                    <p class="text-sm">
                      {$t("privacy.sections.cookies.type1.description")}
                    </p>
                  </div>
                  <div class="bg-blue-50 p-4 rounded-lg">
                    <h3 class="font-semibold text-gray-900 mb-2">
                      {$t("privacy.sections.cookies.type2.title")}
                    </h3>
                    <p class="text-sm">
                      {$t("privacy.sections.cookies.type2.description")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            id="contact-management"
            aria-labelledby="contact-management-heading"
            class="mb-8"
          >
            <div class="bg-white rounded-xl shadow-sm p-6 md:p-8">
              <h2
                id="contact-management-heading"
                class="text-2xl md:text-3xl font-bold text-gray-900 mb-6"
              >
                {$t("privacy.sections.contact-management.title")}
              </h2>
              <div class="text-lg text-gray-700 leading-relaxed space-y-4">
                <p>
                  {$t("privacy.sections.contact-management.intro")}
                </p>

                <div class="bg-green-50 p-4 rounded-lg">
                  <h3 class="font-semibold text-gray-900 mb-2">
                    {$t(
                      "privacy.sections.contact-management.contact-form.title",
                    )}
                  </h3>
                  <p class="text-sm">
                    {$t(
                      "privacy.sections.contact-management.contact-form.content",
                    )}
                  </p>
                </div>
              </div>
            </div>
          </section>
        </article>

        <footer
          class="text-center mt-8"
          aria-label={$t("privacy.footer.aria-label")}
        >
          <div class="bg-white rounded-xl shadow-sm p-6">
            <p class="text-sm text-gray-500">
              <span class="block mb-2 font-medium"
                >{$t("privacy.footer.source-label")}</span
              >
              <a
                href="https://datenschutz-generator.de/"
                class="text-gray-600 hover:text-gray-900 underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-1 rounded"
                target="_blank"
                rel="noopener noreferrer nofollow"
                title={$t("privacy.footer.generator-link.title")}
                aria-label={$t("privacy.footer.generator-link.aria-label")}
              >
                {$t("privacy.footer.generator-link.text")}
              </a>
            </p>
          </div>
        </footer>
      </div>
    </div>
  </section>
</main>
