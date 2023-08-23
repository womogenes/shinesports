// Session cookie: https://github.com/pixelmund/svelte-kit-cookie-session

import { redirect } from '@sveltejs/kit';
import { handleSession } from 'svelte-kit-cookie-session';
import { SESSION_SECRET } from '$env/static/private';

// You can do it like this, without passing a own handle function
export const handle = handleSession(
  { secret: SESSION_SECRET },
  ({ event, resolve }) => {
    // event.locals is populated with the session `event.locals.session`
    return resolve(event);
  },
);
