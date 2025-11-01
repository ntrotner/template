<!-- @migration-task Error while migrating Svelte code: can't migrate `$: isAdmin = derived(
    userState.getAsyncState(),
    (user) => user?.role === "admin",
  );` to `$derived` because there's a variable named derived.
     Rename the variable and try again or migrate by hand. -->
<script lang="ts">
  import { derived } from "svelte/store";
  import AdminSidebar from "../../components/admin/sidebar/Sidebar.svelte";
  import SlimNavigator from "../../components/navigator/SlimNavigator.svelte";
  import { userState } from "$lib/states/user";

  $: isAdmin = derived(
    userState.getAsyncState(),
    (user) => user?.role === "admin",
  );
</script>

{#if $isAdmin}
  <div class="flex flex-row content-stretch">
    <AdminSidebar />
    <div class="flex flex-col flex-1">
      <SlimNavigator showTitle={false} />
      <div class="flex-1 xl:px-12 md:px-8 sm:px-4 px-2 min-h-screen">
        <slot />
      </div>
    </div>
  </div>
{/if}
