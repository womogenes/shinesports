// import { fetchSpreadsheet, parseSheet1Row } from './teamData.js';

// export const load = async () => {
//   const sheet1 = await fetchSpreadsheet('Sheet1');

//   // Map some of this stuff
//   let allTeams = sheet1.values?.slice(1).map(parseSheet1Row);
//   console.log(allTeams);
//   return { allTeams };
// };

import { parseData } from './teamData.js';

import db from '/src/firebase.js';

import { collection, query, where, getDocs } from "firebase/firestore";

export const load = async () => {
  const q = query(collection(db, "teams"));

  const qTeams = await getDocs(q);
  
  let teamList = [];
  qTeams.forEach((doc) => {
    teamList.push(doc);
  })

  let allTeams = teamList.map(parseData);


  return { allTeams };
};
