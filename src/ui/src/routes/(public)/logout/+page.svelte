<script>
  import { logout } from "$lib/states/authentication";
  import { t } from "$lib/i18n";

  logout();
</script>

<div class="container mt-8">
  <div class="title">
    <h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      {$t("logout.bye-message")}
    </h1>
  </div>
</div>

<style>
  .container {
    min-width: 325px;
    max-width: 425px;
  }

  .title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
</style>
