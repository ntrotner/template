<script>
  import "../app.pcss";
  import Navigator from '../components/navigator/Navigator.svelte';
  import LoginGuard from '$lib/routes/guards/login.svelte';
</script>

<LoginGuard></LoginGuard>
<Navigator></Navigator>
<slot />
