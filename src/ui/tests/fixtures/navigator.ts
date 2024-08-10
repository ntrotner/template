import type { Page } from "@playwright/test";

export class NavigatorFixture {
	private PARENT_SELECTOR = 'div[role=menubar]'

	constructor(private page: Page) {
	}

	public getTitle(): Promise<string> {
		return this.page.locator(this.PARENT_SELECTOR + ' .nav-left .title button').innerText();
	}

	public clickOnLanguageExpand(): Promise<void> {
		return this.page.locator(this.PARENT_SELECTOR + ' .language button').click();
	}

	public clickOnLanguageClose(): Promise<void> {
		return this.page.locator('div[role=dialog] .absolute').click();
	}
	
	public async getListOfLanguages(): Promise<string[]> {
		try {
			const locators = await this.page.locator('.language-select').all();
      return await Promise.all(locators.map(async (locator) => await locator.innerText()));
    } catch {
      return ([] as string[]);
    }
	}

	public async expandMenu(): Promise<void> {
		return this.page.locator(this.PARENT_SELECTOR + ' .nav-right button').click();
	}
	
	public async selectOptionInMenu(entry: 'login' | 'profile' | 'logout'): Promise<void> {
		let optionLocator; 
		switch(entry) {
			case "login":
				optionLocator = this.page.locator("div[role=menuitem]", { has: this.page.locator('text="Login"') });
				break;
			case "profile":
				optionLocator = this.page.locator("div[role=menuitem]", { has: this.page.locator('text="Profile"') });
				break;
			case "logout":
				optionLocator = this.page.locator("div[role=menuitem]", { has: this.page.locator('text="Logout"') });
				break;
		}
		return optionLocator.click();
	}

}
