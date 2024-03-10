<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<script>
  import { logger } from "$lib/analytics";
  import { configState, fetchConfigurations } from "$lib/states/config";
  import { AppConfigKey, checkStatus } from "$lib/states/status";
  import { take } from "rxjs";
  import { onMount } from "svelte";

  onMount(() => {
    fetchConfigurations(window.configUrl).then(() => logger.info("page init"));
    configState.getConfig(AppConfigKey).pipe(
      take(1)
    ).subscribe(({healthCheck}) => healthCheck ? checkStatus() : null)
  });
</script>
