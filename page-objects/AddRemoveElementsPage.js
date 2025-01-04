import { expect } from '@playwright/test';

export class AddRemoveElementsPage {
  constructor(page) {
    this.page = page;
    this.addElementButton = page.getByRole('button', { name: 'Add Element' });
    this.deleteButton = page.getByRole('button', { name: 'Delete' });
  }

  async goTo() {
    await this.page.goto('/add_remove_elements/');
  }

  async addElement() {
    const elementsCountBefore = await this.deleteButton.count();

    await this.addElementButton.click();
    await expect(await this.deleteButton.count()).toEqual(elementsCountBefore + 1);
  }

  async removeElement() {
    let counter = 0;
    while (await this.deleteButton.nth(counter).isVisible()) counter++;
    if (counter === 0) return;
    const elementsCountBefore = counter;

    await this.deleteButton.first().click();

    counter = 0;
    while (await this.deleteButton.nth(counter).isVisible()) counter++;
    const elementsCountAfter = counter;

    expect(elementsCountAfter).toEqual(elementsCountBefore - 1);
  }
}
