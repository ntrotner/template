import type { Page } from "@playwright/test";

export class LoginFixture {
  private PARENT_SELECTOR = "div.container";

  constructor(private page: Page) {}

  public clickLogin(): Promise<void> {
    return this.page
      .locator("button", { has: this.page.locator('text="Login"') })
      .click();
  }

  public clickRegister(): Promise<void> {
    return this.page
      .locator("button", { has: this.page.locator('text="Register"') })
      .click();
  }

  public clickSubmitRegister(): Promise<void> {
    return this.page
      .locator("div[aria-labelledby=register] div.submit button")
      .click();
  }

  public async fillRegister(name: string, password: string): Promise<void> {
    await this.page.locator("input[id=registerusername]").fill(name);
    await this.page.locator("input[id=registerpassword]").fill(password);
    await this.page.locator("input[id=registerrepeatpassword]").fill(password);
  }
}
