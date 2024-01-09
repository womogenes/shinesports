import { redirect } from '@sveltejs/kit';

let search = {
  sport: '',
  zip: '',
};

export const actions = {
  teams: async ({ request }) => {
    const formData = await request.formData();
    const sport = formData.get('sport');
    const zip = formData.get('zip');
    console.log(sport)
    // Process the form data and perform actions
    // search.sport = sport;
    // search.zip = zip;
    // throw redirect("303", "/teams");
  },
};
