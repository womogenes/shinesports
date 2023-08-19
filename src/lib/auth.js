import { createAuth0Client } from '@auth0/auth0-spa-js';
import { user, isAuthenticated, popupOpen } from './store';

let config = {
  domain: 'dev-z3efcf3az61vrhnj.us.auth0.com',
  clientId: 'y2jHoiCTgZe8IonG556jJxsezqXTvJDC',
};

async function createClient() {
  let auth0Client = await createAuth0Client({
    domain: config.domain,
    clientId: config.clientId,
    authorizationParams: {
      redirect_uri: window.origin.href,
    },
  });

  return auth0Client;
}

async function loginWithPopup(client, options) {
  popupOpen.set(true);
  try {
    await client.loginWithPopup(options);

    user.set(await client.getUser());
    isAuthenticated.set(true);
  } catch (e) {
    // eslint-disable-next-line
    console.error(e);
  } finally {
    popupOpen.set(false);
  }
}

function logout(client) {
  return client.logout();
}

const auth = {
  createClient,
  loginWithPopup,
  logout,
};

export { auth };
