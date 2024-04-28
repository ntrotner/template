<script>
  import "../app.pcss";
  import Navigator from '../components/navigator/Navigator.svelte';
  import LoginGuard from '$lib/routes/guards/login.svelte';
  import { Toaster } from "$lib/components/ui/sonner";
</script>

<LoginGuard></LoginGuard>
<Navigator></Navigator>
<Toaster></Toaster>
<slot />
