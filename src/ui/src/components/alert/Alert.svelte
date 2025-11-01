<script lang="ts">
  import type { Variant } from "$lib/components/ui/alert/index.js";
  import {
    Alert,
    AlertTitle,
    AlertDescription,
  } from "$lib/components/ui/alert/index.js";
  import { Info } from "@lucide/svelte";
  import type { HTMLAttributes } from "svelte/elements";

  type $$Props = HTMLAttributes<HTMLDivElement> & {
    messages: string[];
    title?: string;
    variant?: Variant;
  };
  interface Props {
    title?: $$Props["title"];
    messages?: $$Props["messages"];
    variant?: $$Props["variant"];
  }

  let { title = "", messages = [], variant = "default" }: Props = $props();
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
