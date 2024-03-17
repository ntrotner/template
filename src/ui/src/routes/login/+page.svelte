<script lang="ts">
  import * as Tabs from "$lib/components/ui/tabs/index.js";
  import * as Card from "$lib/components/ui/card/index.js";
  import * as Alert from "$lib/components/ui/alert/index.js";
  import Info from "svelte-radix/InfoCircled.svelte"
  import { Button } from "$lib/components/ui/button/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import { Label } from "$lib/components/ui/label/index.js";
  import { t } from "$lib/i18n/index";
  import { appState } from "$lib";
  import { login, register } from '$lib/states/authentication';

  let mobile = false;
  appState.subscribe((app) => (mobile = (app?.width || 0) <= 640));

  function isValid(input: string) {
    return input.trim().length !== 0 
  }

  async function submitLogin() {
    const username = (document.querySelector('#loginusername') as HTMLInputElement)?.value || '';
    const password = (document.querySelector('#loginpassword') as HTMLInputElement)?.value || '';
    if (!isValid(username) || !isValid(password)) {
      return;
    }
    await login(username, password);
  }

  async function submitRegister() {
    const username = (document.querySelector('#registerusername') as HTMLInputElement)?.value || '';
    const password = (document.querySelector('#registerpassword') as HTMLInputElement)?.value || '';
    const repeatPassword = (document.querySelector('#registerrepeatpassword') as HTMLInputElement)?.value || '';

    if (password !== repeatPassword) {
      return;
    }

   if (!isValid(username) || !isValid(password)) {
      return;
    }
    await register(username, password);
  }
</script>

<div class="container {mobile ? 'pt-8' : 'pt-16'}">
  <Tabs.Root value="login" class="w-[475px]">
    <Tabs.List class="grid w-full grid-cols-2 mb-4">
      <Tabs.Trigger value="login">{$t("login.login-title")}</Tabs.Trigger>
      <Tabs.Trigger value="register">{$t("login.register-title")}</Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content value="login">
      <Alert.Root class="mt-4 mb-4" variant="destructive">
        <Info class="h-4 w-4" />
        <Alert.Title>{$t("login.input-error-title")}</Alert.Title>
        <Alert.Description>
          {$t("login.input-error-description")}
        </Alert.Description>
      </Alert.Root>
      <Card.Root>
        <Card.Content class="space-y-2 mt-5">
          <div class="space-y-1">
            <Label for="loginusername">{$t("login.username")}</Label>
            <Input id="loginusername" type="email" value="" />
          </div>
          <div class="space-y-1">
            <Label for="password">{$t("login.password")}</Label>
            <Input id="loginpassword" type="password" value="" />
          </div>
        </Card.Content>
        <Card.Footer>
          <Button on:click={submitLogin}>{$t("login.login-button")}</Button>
        </Card.Footer>
      </Card.Root>
    </Tabs.Content>
    <Tabs.Content value="register">
      <Alert.Root class="mt-4 mb-4" variant="destructive">
        <Info class="h-4 w-4" />
        <Alert.Title>{$t("login.input-error-title")}</Alert.Title>
        <Alert.Description>
          {$t("login.input-error-description")}
        </Alert.Description>
      </Alert.Root>
      <Card.Root>
        <Card.Content class="space-y-2 mt-5">
          <div class="space-y-1">
            <Label for="registerusername">{$t("login.username")}</Label>
            <Input id="registerusername" type="email" />
          </div>
          <div class="space-y-1">
            <Label for="registerpassword">{$t("login.password")}</Label>
            <Input id="registerpassword" type="password" />
          </div>
          <div class="space-y-1">
            <Label for="registerrepeatpassword">{$t("login.password-repeat")}</Label>
            <Input id="registerrepeatpassword" type="password" />
          </div>
        </Card.Content>
        <Card.Footer>
          <Button on:click={submitRegister}>{$t("login.register-button")}</Button>
        </Card.Footer>
      </Card.Root>
    </Tabs.Content>
  </Tabs.Root>
</div>

<style>
  .container {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
</style>
