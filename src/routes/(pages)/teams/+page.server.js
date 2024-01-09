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
import { collection, query, where, getDocs } from 'firebase/firestore';

let type;

export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const sport = formData.get('sport');
    const zip = formData.get('zip');
    type = sport.toLowerCase()
  },
};

export const load = async () => {

  let q = query(collection(db, type)); ;

  const qTeams = await getDocs(q);

  let teamList = [];
  qTeams.forEach((doc) => {
    teamList.push(doc);
  });

  let allTeams = teamList.map((doc) => parseData(doc, type));

  return { allTeams, type };
};
