import {test} from '../fixtures/pages.fixture';

test('Select a dropdown option', async ({dropdownPage}) => {

    await dropdownPage.goTo();

    await dropdownPage.selectAnOption("Option 2");

});