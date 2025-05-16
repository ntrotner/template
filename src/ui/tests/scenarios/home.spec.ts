import { test, expect } from "@playwright/test";
import { NavigatorFixture } from "../fixtures/navigator";
import { PLAYWRIGHT_BASE_URL } from "../config";

test("Home", async ({ page }) => {
  let navigatorFixture: NavigatorFixture;

  await test.step("setup", async () => {
    await page.goto(PLAYWRIGHT_BASE_URL);
    navigatorFixture = new NavigatorFixture(page);
  });

  await test.step("is navigator title filled", async () => {
    expect(await navigatorFixture.getTitle()).toEqual("Template EN");
    await expect(page).toHaveScreenshot();
  });

  await test.step("click and check language selector", async () => {
    await navigatorFixture.clickOnLanguageExpand();
    expect(await navigatorFixture.getListOfLanguages()).toEqual([
      "English",
      "German",
    ]);
    await expect(page).toHaveScreenshot();
    await navigatorFixture.clickOnLanguageClose();
  });

  await test.step("click on login", async () => {
    await navigatorFixture.expandMenu();
    await expect(page).toHaveScreenshot();
    await navigatorFixture.selectOptionInMenu("login");
    await expect(page).toHaveURL(/login/);
    await expect(page).toHaveScreenshot();
  });
});
