<script>
  import { t } from "$lib/i18n";
  import { MailIcon, PhoneIcon } from "@lucide/svelte";
</script>

<section
  class="bg-white my-2 lg:my-6 pt-4 pb-6 rounded-xl"
  aria-labelledby="contact-heading"
>
  <div class="container mx-auto px-4">
    <div class="flex flex-col items-stretch md:items-center">
      <div>
        <h2
          id="contact-heading"
          class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight"
        >
          {$t("home.contact.title")}
        </h2>
        <p class="text-xl text-gray-600 mb-10 leading-relaxed">
          {$t("home.contact.subtitle")}
        </p>

        <div
          class="space-y-6 mb-10"
          role="list"
          aria-label={$t("common.aria.contact-methods")}
        >
          <div class="flex items-center space-x-4" role="listitem">
            <div class="bg-gray-100 p-3 rounded-lg" aria-hidden="true">
              <MailIcon class="w-6 h-6 text-black" />
            </div>
            <div>
              <h3 class="font-semibold text-gray-900">
                {$t("home.contact.email.title")}
              </h3>
              <a
                href="mailto:{$t('common.specifics.email')}"
                class="text-black hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 rounded"
                aria-label={$t("common.aria.nav-menu.contact") +
                  " " +
                  $t("common.specifics.email")}
              >
                {$t("common.specifics.email")}
              </a>
            </div>
          </div>

          <div class="flex items-center space-x-4" role="listitem">
            <div class="bg-gray-100 p-3 rounded-lg" aria-hidden="true">
              <PhoneIcon class="w-6 h-6 text-black" />
            </div>
            <div>
              <h3 class="font-semibold text-gray-900">
                {$t("home.contact.phone.title")}
              </h3>
              <a
                href="tel:{$t('common.specifics.telephone')}"
                class="text-black hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 rounded"
                aria-label={$t("common.aria.nav-menu.call") +
                  " " +
                  $t("common.specifics.telephone")}
              >
                {$t("common.specifics.telephone")}
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- Action Buttons -->
      <nav
        class="flex flex-col gap-4 md:flex-row md:items-stretch"
        aria-label={$t("common.aria.contact-actions")}
      >
        <a
          href="mailto:{$t('common.specifics.email')}"
          class="inline-flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg font-semibold transition-colors hover:shadow-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
          aria-label={$t("common.aria.nav-menu.contact")}
        >
          <MailIcon class="mr-2 w-5 h-5" aria-hidden="true" />
          {$t("common.nav-menu.contact")}
        </a>
        <a
          href="tel:{$t('common.specifics.telephone')}"
          class="inline-flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg font-semibold transition-colors hover:shadow-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
          aria-label={$t("common.aria.nav-menu.call")}
        >
          <PhoneIcon class="mr-2 w-5 h-5" aria-hidden="true" />
          {$t("common.nav-menu.call")}
        </a>
      </nav>
    </div>
  </div>
</section>
