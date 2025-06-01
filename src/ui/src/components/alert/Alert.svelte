<script lang="ts">
  import type { Variant } from "$lib/components/ui/alert/index.js";
  import {
    Alert,
    AlertTitle,
    AlertDescription,
  } from "$lib/components/ui/alert/index.js";
  import Info from "lucide-svelte/icons/info";
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
  <Alert class="!mt-2 !mb-2" {variant}>
    <Info class="h-4 w-4" />
    <AlertTitle>{title}</AlertTitle>
    <AlertDescription>
      <ul>
        {#each messages as message}
          <li>{message}</li>
        {/each}
      </ul>
    </AlertDescription>
  </Alert>
{/if}
