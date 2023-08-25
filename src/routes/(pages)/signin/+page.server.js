import { redirect } from '@sveltejs/kit';
import { OAuth2Client } from 'google-auth-library';
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from '$env/static/private';

export const actions = {
  OAuth2: async ({}) => {
    const redirectURL = 'http://localhost:5173/oauth';

    const oAuth2Client = new OAuth2Client(
      GOOGLE_CLIENT_ID,
      GOOGLE_CLIENT_SECRET,
      redirectURL,
    );
    const authorizeURL = oAuth2Client.generateAuthUrl({
      access_type: 'online',
      scope:
        'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email openid',
      prompt: 'consent',
    });

    throw redirect(302, authorizeURL);
  },
};
