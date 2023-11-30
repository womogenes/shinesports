export const actions = {
    teams: async ({ request }) => {
      const formData = await request.formData();
      const sport = formData.get('sport');
      const zip = formData.get('zip');
      // Process the form data and perform actions
      console.log(zip + sport);
      return { success: true, sport: sport, zip: zip };
    },
  };
