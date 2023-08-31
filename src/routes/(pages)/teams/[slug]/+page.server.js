import { fetchSpreadsheet } from '../fetchSpreadsheet';
import { slugify } from '$lib/utils';

export const load = async ({ params }) => {
  const { teamSlug } = params;

  // Fetch data
  const sheet1 = await fetchSpreadsheet('Sheet1');

  const basicInfo = sheet1.values.find((row, idx) => {
    if (idx === 0) return false;
    return slugify(row[1]) === params.slug;
  });

  return { basicInfo };
};
