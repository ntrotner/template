<script lang="ts">
  import type { Variant } from "$lib/components/ui/alert/index.js";
  import * as Alert from "$lib/components/ui/alert/index.js";
  import Info from "svelte-radix/InfoCircled.svelte";
  import type { HTMLAttributes } from "svelte/elements";

  type $$Props = HTMLAttributes<HTMLDivElement> & {
    messages: string[];
    title?: string;
    variant?: Variant;
  };
  export let title: $$Props["title"] = "";
  export let messages: $$Props["messages"] = [];
  export let variant: $$Props["variant"] = "default";
</script>

{#if messages.length > 0}
  <Alert.Root class="!mt-2 !mb-2" variant={variant}>
    <Info class="h-4 w-4" />
    <Alert.Title>{title}</Alert.Title>
    <Alert.Description>
      <ul>
        {#each messages as message}
          <li>{message}</li>
        {/each}
      </ul>
    </Alert.Description>
  </Alert.Root>
{/if}
