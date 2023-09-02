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

  // Sheet 2 o.O
  // Find the row that contains this team
  const sheet2 = await fetchSpreadsheet('Sheet2');
  let teamRows = sheet2.values.filter((row, idx) => {
    if (idx === 0) return false;
    if (row.length === 0) return false;
    const name = row[0].split(' - ');
    return slugify(name[name.length - 1]) === params.slug;
  });

  const allTeamsInfo = {
    website: teamRows[0][1],
    ageRange: teamRows[0][7].replace('-', '–'),
  };

  teamRows = teamRows.map((row) => {
    let teamType = row[0].includes(' - ') ? row[0].split(' - ')[0] : '';
    return {
      teamType,
      coachName: row[2],
      contactEmail: row[3],
      contactNumber: row[4] || teamRows[0][4],
      teamSize: row[5],
      practiceSchedule: row[6],
    };
  });

  return {
    basicInfo,
    coords,
    teamRows,
    allTeamsInfo,
  };
};
