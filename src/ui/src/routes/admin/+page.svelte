<!-- @migration-task Error while migrating Svelte code: can't migrate `$: email = derived(userState.getAsyncState(), (user) => user?.email);` to `$derived` because there's a variable named derived.
     Rename the variable and try again or migrate by hand. -->
<script lang="ts">
  import { t } from "$lib/i18n";
  import { userState } from "$lib/states/user";
  import { derived } from "svelte/store";

  $: email = derived(userState.getAsyncState(), (user) => user?.email);
</script>

<div class="flex flex-col gap-4">
  <h2 class="text-2xl font-bold">{$t("admin.hello", { email: $email })}</h2>
</div>
