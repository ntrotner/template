<script>
  import { logger } from "$lib/analytics";
  import { configState, fetchConfigurations } from "$lib/states/config";
  import { AppConfigKey, checkStatus } from "$lib/states/status";
  import { take } from "rxjs";
  import { onMount } from "svelte";
  import Navigator from '../components/navigator/Navigator.svelte';

  onMount(() => {
    fetchConfigurations(window.configUrl).then(() => logger.info("page init"));
    configState.getConfig(AppConfigKey).pipe(
      take(1)
    ).subscribe(({healthCheck}) => healthCheck ? checkStatus() : null)
  });
</script>

<Navigator></Navigator>