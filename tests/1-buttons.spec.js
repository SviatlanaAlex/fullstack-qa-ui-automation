import { test } from '../fixtures/pages.fixture';

test('Add / Remove elements', async ({ addRemoveElementsPage }) => {
  await addRemoveElementsPage.goTo();

  await addRemoveElementsPage.addElement();
  await addRemoveElementsPage.addElement();
  await addRemoveElementsPage.addElement();

  await addRemoveElementsPage.removeElement();
  await addRemoveElementsPage.removeElement();
  await addRemoveElementsPage.removeElement();
  await addRemoveElementsPage.removeElement();
});
