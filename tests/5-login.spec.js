import { test } from '../fixtures/pages.fixture';

test('Enter credentials into the login form and verify that the user is logged in successfully', async ({
  loginPage,
}) => {
  await loginPage.goTo();

  await loginPage.fillCredentialsAndLogin();

  await loginPage.verifyLoggedInState();
});
