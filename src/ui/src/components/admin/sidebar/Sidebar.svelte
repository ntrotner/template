<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import { goto } from "$app/navigation";
  import { t } from "$lib/i18n";
  import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
  } from "$lib/components/ui/tooltip/index.js";
  import { ROUTES } from "$lib/routes/routes";
  import { Wrench } from "@lucide/svelte";

  function navigate(route: string) {
    goto(route);
  }
</script>

<aside
  class="xl:w-[5rem] md:w-[4rem] sm:w-[3rem] w-[2.5rem] bg-background border-r border-border flex flex-col items-center z-50"
>
  <div class="mb-2 p-4">
    <Button
      variant="ghost"
      size="icon"
      class="h-10 w-10 rounded-md hover:bg-muted"
      onclick={() => navigate(ROUTES.ADMIN)}
    >
      <div
        class="home-button md:h-6 md:w-6 h-5 w-5 bg-primary rounded-xl flex items-center justify-center text-primary-foreground font-bold"
      >
        T
      </div>
    </Button>
  </div>

  <nav class="flex flex-col gap-1 items-center">
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          class="h-10 w-10 rounded-md hover:bg-muted"
          onclick={() => navigate(ROUTES.ADMIN_SETTINGS)}
        >
          <Wrench class="md:h-6 md:w-6 h-5 w-5 text-gray-500" />
          <span class="sr-only">{$t("admin.sidebar.wrench")}</span>
        </Button>
      </TooltipTrigger>
      <TooltipContent side="right">
        <p>{$t("admin.sidebar.wrench")}</p>
      </TooltipContent>
    </Tooltip>
  </nav>
</aside>
