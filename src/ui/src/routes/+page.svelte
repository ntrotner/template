<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<script>
  import { logger } from "$lib/analytics";
  import { fetchConfigurations } from "$lib/states/config";
  import { checkStatus } from "$lib/states/status";
  import { onMount } from "svelte";

  onMount(() => {
    fetchConfigurations(window.configUrl).then(() => logger.info("page init"));
    checkStatus();
  });
</script>
