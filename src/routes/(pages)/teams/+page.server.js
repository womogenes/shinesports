import { fetchSpreadsheet, parseSheet1Row } from './teamData.js';

export const load = async () => {
  const sheet1 = await fetchSpreadsheet('Sheet1');

  // Map some of this stuff
  let teamData = sheet1.values.slice(1).map(parseSheet1Row);

  return { teamData };
};
