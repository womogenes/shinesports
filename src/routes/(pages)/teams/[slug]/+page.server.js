import { fetchSpreadsheet, parseSheet1Row } from '../teamData.js';
import { geocode } from '$lib/geocode.js';
import { slugify } from '$lib/utils.js';

export const load = async ({ params }) => {
  // Search for this team in the spreadsheet
  const sheet1 = await fetchSpreadsheet('Sheet1');

  const basicInfo = parseSheet1Row(
    sheet1.values.find((row, idx) => {
      if (idx === 0) return false;
      return slugify(row[1]) === params.slug;
    }),
  );
  const geocoded = await geocode(basicInfo.address);
  const coords = [parseFloat(geocoded.lat), parseFloat(geocoded.lon)];

  return {
    basicInfo,
    coords,
  };
};
