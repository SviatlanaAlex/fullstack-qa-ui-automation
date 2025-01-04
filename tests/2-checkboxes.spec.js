import {test} from '../fixtures/pages.fixture';

test('Read states and Select / Deselect checkboxes', async ({checkboxesPage}) => {

    await checkboxesPage.goTo();

    await checkboxesPage.readStates();

    await checkboxesPage.changeStates();

    await checkboxesPage.readStates();

});