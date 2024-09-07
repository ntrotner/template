<script lang="ts">
  import * as Tabs from "$lib/components/ui/tabs/index.js";
  import * as Card from "$lib/components/ui/card/index.js";
  import { Button } from "$lib/components/ui/button/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import { Label } from "$lib/components/ui/label/index.js";
  import { t } from "$lib/i18n";
  import { login, register } from '$lib/states/authentication';
  import { type ModelError, type Success } from "$lib/open-api";
  import { goto } from "$app/navigation";
  import { ROUTES } from "$lib/routes";
  import { writable, type Unsubscriber } from "svelte/store";
  import { onDestroy } from "svelte";
  import Alert from "../../components/alert/Alert.svelte";
  import { Injector } from "$lib/injector";

  const subscriptions: Unsubscriber[] = [];
  let errors = writable<string[]>([]);
  let mobile = writable(false);
  let requestInProcess = false;

  function isValid(input: string) {
    return input.trim().length !== 0 
  }

  function fillErrors(errorInput: Success & ModelError | undefined) {
    $errors = [];
    if ((errorInput as ModelError)?.errorMessages) {
      $errors = ((errorInput as ModelError).errorMessages?.map(({message}) => message).filter(message => typeof message === 'string')) as string[] || [];
    }
  }

  function isError(input: Success & ModelError | undefined) {
    return !!(input as ModelError)?.errorMessages;
  }

  function showErrors(errorInput: Array<any> | undefined) {
    return !!errorInput && errorInput.length > 0;
  }

  async function submitLogin() {
    requestInProcess = true;
    try {
      const username = (document.querySelector('#loginusername') as HTMLInputElement)?.value || '';
      const password = (document.querySelector('#loginpassword') as HTMLInputElement)?.value || '';
      if (!isValid(username) || !isValid(password)) {
        fillErrors({errorMessages: [{code: '200', message: 'User or Password Invalid'}]})
        throw new Error("");
      }
      const response = await login(username, password);
      if (!response) {
        fillErrors({errorMessages: [{code: '100', message: 'Server Failure'}]})
      } else if (isError(response)) {
        fillErrors(response);
      } else {
        goto(ROUTES.HOME);
      }
    } finally {
      requestInProcess = false;
    }
  }

  async function submitRegister() {
    requestInProcess = true;
    try {
      const username = (document.querySelector('#registerusername') as HTMLInputElement)?.value || '';
      const password = (document.querySelector('#registerpassword') as HTMLInputElement)?.value || '';
      const repeatPassword = (document.querySelector('#registerrepeatpassword') as HTMLInputElement)?.value || '';
  
      if (!isValid(username) || !isValid(password)) {
         fillErrors({errorMessages: [{code: '200', message: 'User or Password Invalid'}]})
         throw new Error("");
       }
      if (password !== repeatPassword) {
        fillErrors({errorMessages: [{code: '200', message: 'Passwords don\'t match'}]})
        throw new Error("");
      }
  
      const response = await register(username, password);
      if (!response) {
        fillErrors({errorMessages: [{code: '100', message: 'Server Failure'}]})
      } else if (isError(response)) {
        fillErrors(response);
      } else {
        goto(ROUTES.HOME);
      }
    } finally {
      requestInProcess = false;
    }
  }

  function loginSubmitOnEnter(e: any) {
    try {
      e.keyCode === 13 ? submitLogin() : null;
    } catch {}
  }

  function registerSubmitOnEnter(e: any) {
    try {
      e.keyCode === 13 ? submitRegister() : null;
    } catch {}
  }

  function clear() {
    $errors = [];
    (document.querySelector('#registerusername') as HTMLInputElement).value = '';
    (document.querySelector('#registerpassword') as HTMLInputElement).value = '';
    (document.querySelector('#loginusername') as HTMLInputElement).value = '';
    (document.querySelector('#loginpassword') as HTMLInputElement).value = '';
  }

  (async () => {
    subscriptions.push((await Injector.getService('appState')).subscribe((app) => mobile.set((app?.width || 0) <= 640)));
  })()

  onDestroy(() => subscriptions.forEach(s => s()));
</script>

<div class="container {$mobile ? 'pt-8' : 'pt-16'}">
  <Tabs.Root onValueChange={clear} value="login" class="w-[475px]">
    <Tabs.List class="grid w-full grid-cols-2 mb-4">
      <Tabs.Trigger value="login" disabled={requestInProcess}>{$t("login.login-title")}</Tabs.Trigger>
      <Tabs.Trigger value="register" disabled={requestInProcess}>{$t("login.register-title")}</Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content value="login">
      <Alert messages={$errors} title={$t("login.input-error-title")} variant="destructive">
      </Alert>
      <Card.Root>
        <Card.Content class="space-y-2 mt-5">
          <div class="space-y-1">
            <Label for="loginusername">{$t("login.username")}</Label>
            <Input id="loginusername" on:keypress={loginSubmitOnEnter} type="email" value="" disabled={requestInProcess} />
          </div>
          <div class="space-y-1">
            <Label for="password">{$t("login.password")}</Label>
            <Input id="loginpassword" on:keypress={loginSubmitOnEnter} type="password" value="" disabled={requestInProcess} />
          </div>
        </Card.Content>
        <Card.Footer>
          <div class="submit">
            <Button class="w-[100%]" on:click={submitLogin} disabled={requestInProcess}>{$t("login.login-button")}</Button>
          </div>
        </Card.Footer>
      </Card.Root>
    </Tabs.Content>
    <Tabs.Content value="register">
      <Alert messages={$errors} title={$t("login.input-error-title")} variant="destructive">
      </Alert>
      <Card.Root>
        <Card.Content class="space-y-2 mt-5">
          <div class="space-y-1">
            <Label for="registerusername">{$t("login.username")}</Label>
            <Input id="registerusername" on:keypress={registerSubmitOnEnter} type="email" disabled={requestInProcess} />
          </div>
          <div class="space-y-1">
            <Label for="registerpassword">{$t("login.password")}</Label>
            <Input id="registerpassword" on:keypress={registerSubmitOnEnter} type="password" disabled={requestInProcess} />
          </div>
          <div class="space-y-1">
            <Label for="registerrepeatpassword">{$t("login.password-repeat")}</Label>
            <Input id="registerrepeatpassword" on:keypress={registerSubmitOnEnter} type="password" disabled={requestInProcess} />
          </div>
        </Card.Content>
        <Card.Footer>
          <div class="submit">
            <Button class="w-[100%]" on:click={submitRegister} disabled={requestInProcess}>{$t("login.register-button")}</Button>
          </div>  
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

  .submit {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
    flex-wrap: nowrap;
  }
</style>
