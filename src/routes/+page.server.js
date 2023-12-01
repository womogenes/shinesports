import { redirect } from '@sveltejs/kit';

let search = {
  sport: '',
  zip: '',
};

export const actions = {
  // about: async ({ request }) => {
  //   const formData = await request.formData();
  //   const test = formData.get('test');
  //   return { success: true, test: test }
  // },
  teams: async ({ request }) => {
    const formData = await request.formData();
    const sport = formData.get('sport');
    const zip = formData.get('zip');
    // Process the form data and perform actions
    search.sport = sport;
    search.zip = zip;
    return { success: true, sport: sport, zip: zip };
  },
};
