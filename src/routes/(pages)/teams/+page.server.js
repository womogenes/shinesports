import { slugify } from '$lib/utils';
import { fetchSpreadsheet } from './fetchSpreadsheet';

export const load = async () => {
  const sheet1 = await fetchSpreadsheet('Sheet1');

  // Map some of this stuff
  let teamData = sheet1.values.slice(1).map((row) => {
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
