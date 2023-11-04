// import { fetchSpreadsheet, parseSheet1Row } from './teamData.js';

// export const load = async () => {
//   const sheet1 = await fetchSpreadsheet('Sheet1');

//   // Map some of this stuff
//   let allTeams = sheet1.values?.slice(1).map(parseSheet1Row);

//   return { allTeams };
// };

import db from '/firebase.js';

import { collection, where } from "firebase/firestore";

export const load = async () => {
  const q = query(collection(db, "teams"), where("sport", "==", "crew"));

  const allTeams = await getDocs(q);
  allTeams.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
  })
  
  return { allTeams };
};
