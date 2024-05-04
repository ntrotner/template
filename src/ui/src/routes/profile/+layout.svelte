<script lang="ts">
  import { userState } from "$lib/states/user";
  import { browser } from "$app/environment";
  import { guardUnauthenticatedUserEndpoint } from "$lib/routes/guards/authentication";
  import { ROUTES } from "$lib/routes";

  $: {
    if (browser) {
      const user = userState.getSyncState();
      guardUnauthenticatedUserEndpoint(ROUTES.HOME, user);
    }
  }
</script>

<slot />
