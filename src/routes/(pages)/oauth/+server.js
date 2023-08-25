// Tutorial: https://youtu.be/4QwcC4hfqM0?si=v_0ohTnO45MuL0Qf

import { redirect } from '@sveltejs/kit';
import { OAuth2Client } from 'google-auth-library';
import {
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  OAUTH_REDIRECT,
} from '$env/static/private';

export const GET = async ({ url, locals }) => {
  const redirectURL = OAUTH_REDIRECT;
  const code = await url.searchParams.get('code');
  console.log(`code received: ${code}`);

  try {
    const oAuth2Client = new OAuth2Client(
      GOOGLE_CLIENT_ID,
      GOOGLE_CLIENT_SECRET,
      redirectURL,
    );

    const r = await oAuth2Client.getToken(code);
    oAuth2Client.setCredentials(r.tokens);
    const token = oAuth2Client.credentials;
    const ticket = await oAuth2Client.verifyIdToken({
      idToken: token.id_token,
      audience: GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();

    const userInfo = {
      name: payload.name,
      picture: payload.picture,
      email: payload.email,
    };
    await locals.session.set({ user: userInfo });

    // Add the user to our DB
  } catch (err) {
    console.log(`Error logging in: ${err}`);
  }

  throw redirect(303, '/');
};
