<script>
  import { firstValueFrom } from "rxjs";
  import { userState } from "$lib/states/user";
  import { ROUTES } from "$lib/routes";
  import { beforeNavigate, goto } from "$app/navigation";

  beforeNavigate(async (navigation) => {
    const user = await firstValueFrom(userState.observable());
    if (navigation.to?.route.id?.slice(1) === ROUTES.LOGIN && user?.email) {
      goto(ROUTES.HOME)
    }
  });
</script>