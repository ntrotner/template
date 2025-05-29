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
  <div class="flex flex-row h-screen w-screen">
    <AdminSidebar />
    <div class="flex flex-col flex-1">
      <SlimNavigator showTitle={false} />
      <div class="flex-1 p-4">
        <slot />
      </div>
    </div>
  </div>
{/if}
