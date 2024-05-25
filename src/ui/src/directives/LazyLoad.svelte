<script lang="ts">
  import { Skeleton } from "$lib/components/ui/skeleton";
  import { cn } from "$lib/utils.js.js";

  export let load = false;
  export let importStatement;
  export let inputs: { [key: string]: any } = {};
  export let showSkeleton = false;
  let className: string | undefined = undefined;

  export { className as class };
</script>

{#if load}
  {#await importStatement()}
    {#if showSkeleton}
      <Skeleton class={cn("rounded-md border", className)} />
    {/if}
  {:then lazyComponent}
    <svelte:component this={lazyComponent.default} {...inputs} />
  {/await}
{/if}
