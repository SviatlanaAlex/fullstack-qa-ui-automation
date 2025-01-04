import {test} from '../fixtures/pages.fixture';

test('Fill text field with any number', async ({inputPage}) => {

    await inputPage.goTo();

    await inputPage.fillTextField("15");

});