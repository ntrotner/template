<script lang="ts">
  import { userState } from "$lib/states/user";
  import { browser } from "$app/environment";
  import { isUserAuthenticated } from "$lib/routes/guards/authentication";
  import { ROUTES } from "$lib/routes";
  import { goto } from "$app/navigation";

  $: {
    if (browser) {
      const user = userState.getSyncState();
      if (!isUserAuthenticated(user)) {
        goto(ROUTES.HOME);
      }
    }
  }
</script>

<slot />
