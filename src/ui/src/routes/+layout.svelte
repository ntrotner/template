<script>
  import "../app.pcss";
  import Navigator from '../components/navigator/Navigator.svelte';
  import { Toaster } from "$lib/components/ui/sonner";
</script>

<Navigator></Navigator>
<Toaster></Toaster>
<slot />
