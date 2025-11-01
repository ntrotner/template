<script lang="ts">
  import { Skeleton } from "$lib/components/ui/skeleton";
  import { cn } from "$lib/utils.js.js";

  interface Props {
    load?: boolean;
    importStatement: any;
    inputs?: { [key: string]: any };
    showSkeleton?: boolean;
    class?: string | undefined;
  }

  let {
    load = false,
    importStatement,
    inputs = {},
    showSkeleton = false,
    class: className = undefined
  }: Props = $props();

  
</script>

{#if !load && showSkeleton}
  <Skeleton class={cn("rounded-md border", className)} />
{/if}

{#if load}
  {#await importStatement()}
    {#if showSkeleton}
      <Skeleton class={cn("rounded-md border", className)} />
    {/if}
  {:then lazyComponent}
    <lazyComponent.default {...inputs} />
  {/await}
{/if}
