import { test, expect } from "@playwright/test";
import { NavigatorFixture } from "../fixtures/navigator";
import { PLAYWRIGHT_BASE_URL } from "../config";
import { LoginFixture } from "../fixtures/login";
import { randomEmail, randomPassword } from "../utils";

test("Profile", async ({ page }) => {
  let navigatorFixture: NavigatorFixture;
  let loginFixture: LoginFixture;

  await test.step("setup", async () => {
    await page.goto(PLAYWRIGHT_BASE_URL + "/login");
    navigatorFixture = new NavigatorFixture(page);
    loginFixture = new LoginFixture(page);
  });

  await test.step("is navigator title filled", async () => {
    expect(await navigatorFixture.getTitle()).toEqual("Template EN");
    await expect(page).toHaveScreenshot();
  });

  await test.step("click register", async () => {
    await loginFixture.clickRegister();
    await expect(page).toHaveScreenshot();
  });

  await test.step("fill mock data", async () => {
    await loginFixture.fillRegister(randomEmail(), randomPassword());
  });

  await test.step("submit and redirect", async () => {
    await loginFixture.clickSubmitRegister();
    await expect(page).toHaveURL(PLAYWRIGHT_BASE_URL);
  });

  await test.step("go to profile", async () => {
    await navigatorFixture.expandMenu();
    await navigatorFixture.selectOptionInMenu("profile");
    await expect(page).toHaveURL(/profile/);
  });
});
