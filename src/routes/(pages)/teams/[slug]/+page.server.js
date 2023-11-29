import { fetchSpreadsheet, parseSheet1Row, parseData } from '../teamData.js';

import db from '/src/firebase.js';

import { doc, collection, query, where, getDoc } from "firebase/firestore";

import { geocode } from '$lib/geocode.js';
import { slugify } from '$lib/utils.js';

export const load = async ({ params }) => {
  // Search for this team in the spreadsheet
  // const sheet1 = await fetchSpreadsheet('Sheet1');

  console.log(params.slug);

  const q = query(doc(db, "teams", params.slug));

  const qTeam = await getDoc(q);

  console.log(qTeam);

  const geocoded = await geocode(basicInfo.address);
  const coords = [parseFloat(geocoded.lat), parseFloat(geocoded.lon)];

  // Sheet 2 o.O
  // Find the row that contains this team
  // const sheet2 = await fetchSpreadsheet('Sheet2');
  // let teamRows = sheet2.values.filter((row, idx) => {
  //   if (idx === 0) return false;
  //   if (row.length === 0) return false;
  //   const name = row[0].split(' - ');
  //   return slugify(name[name.length - 1]) === params.slug;
  // });

  let teamRows =  ""

  const teamListInfo = teamList.map(async (doc) => {
    const subQuery = query(collection(db, "teams", doc.id, "teams"));
    const subCollection = await getDocs(subQuery);
    return subCollection;
  });

  const allTeamsInfo = {
    website: teamList.map((doc) => {
      return doc.data()["website"];
    }),
    ageRange: teamList.map((doc) => {
      return doc.data()["age"]
    }),
  };

  teamRows = teamListInfo.map((doc) => {
    let teamType = doc.id.includes(' - ') ? doc.id.split(' - ')[0] : '';
    let teamName = doc.id.includes(' - ') ? doc.id.split(' - ')[1] : '';
    return {
      teamType,
      coachName: doc.data()["coach"],
      contactEmail: doc.data()["email"],
      contactNumber: teamList.filter((doc) => {doc.id == teamName}).data()["contact"] || teamRows[0],
      teamSize: doc.data()["size"],
      practiceSchedule: doc.data()["schedule"],
    };
  });

  return {
    basicInfo,
    coords,
    teamRows,
    allTeamsInfo,
  };
};

// export const load = async ({ params }) => {
//   // Search for this team in the spreadsheet
//   const sheet1 = await fetchSpreadsheet('Sheet1');

//   const basicInfo = parseSheet1Row(
//     sheet1.values.find((row, idx) => {
//       if (idx === 0) return false;
//       return slugify(row[1]) === params.slug;
//     }),
//   );
//   const geocoded = await geocode(basicInfo.address.replace('\n', ' '));
//   const coords = [parseFloat(geocoded.lat), parseFloat(geocoded.lon)];

//   // Sheet 2 o.O
//   // Find the row that contains this team
//   const sheet2 = await fetchSpreadsheet('Sheet2');
//   let teamRows = sheet2.values.filter((row, idx) => {
//     if (idx === 0) return false;
//     if (row.length === 0) return false;
//     const name = row[0].split(' - ');
//     return slugify(name[name.length - 1]) === params.slug;
//   });

//   const allTeamsInfo = {
//     website: teamRows[0][1],
//     ageRange: teamRows[0][7].replace('-', '–'),
//   };

//   teamRows = teamRows.map((row) => {
//     let teamType = row[0].includes(' - ') ? row[0].split(' - ')[0] : '';
//     return {
//       teamType,
//       coachName: row[2],
//       contactEmail: row[3],
//       contactNumber: row[4] || teamRows[0][4],
//       teamSize: row[5]?.replace('-', '–'),
//       practiceSchedule: row[6],
//     };
//   });

//   console.log("basicInfo: " + basicInfo)
//   console.log("coords: " + coords)
//   console.log("teamRows: " + teamRows)
//   console.log("allTeamsInfo: " + allTeamsInfo)

//   return {
//     basicInfo,
//     coords,
//     teamRows,
//     allTeamsInfo,
//   };
// };
