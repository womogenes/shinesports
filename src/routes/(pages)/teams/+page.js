import { slugify } from '$lib/utils';

export const load = async ({ fetch }) => {
  let spreadsheetID = '122yIAMXWzBnx5rYZhnzwix6LSAiOEfdUbItxP6JzWmA';
  let gAPIKey = 'AIzaSyDViBIr7O3XmIfcR4oKFU-m0o3CvMu-SrQ';
  let apiURL = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetID}/values/Sheet1?alt=json&key=${gAPIKey}`;
  const json = await (await fetch(apiURL)).json();

  // Map some of this stuff
  let teamData = json.values.slice(1).map((row) => {
    let googleDriveRegex = /file\/d\/(.+)\/view/g.exec(row[5]);

    let imgURL;
    if (googleDriveRegex) {
      imgURL = `https://lh3.googleusercontent.com/d/${googleDriveRegex[1]}=s200`;
    } else {
      imgURL = row[5];
    }

    return {
      slug: slugify(row[1]),
      schoolOrClub: row[0],
      name: row[1],
      address: row[2],
      teamTypes: row[3],
      scullSweep: row[4],
      logoURL: imgURL,
    };
  });

  return { teamData };
};
