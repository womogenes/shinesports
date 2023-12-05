import { fetchSpreadsheet, parseSheet1Row, parseData } from '../teamData.js';

import db from '/src/firebase.js';

import { doc, collection, query, where, getDoc, getDocs } from "firebase/firestore";

import { geocode } from '$lib/geocode.js';
import { slugify } from '$lib/utils.js';

export const load = async ({ params }) => {
  // Search for this team in the spreadsheet
  // const sheet1 = await fetchSpreadsheet('Sheet1');

  const teamNameList = params.slug.split("-");

  const teamName = (() => {
    let currName = "";
    teamNameList.forEach((word) => {
      const newWord = word[0].toUpperCase() + word.substr(1);
      currName += newWord;
      currName += " ";
    })
    currName = currName.substr(0, currName.length - 1);
    return(currName)
  })()

  const teamRef = doc(db, "teams", teamName)
  const teamQuery = await getDoc(teamRef);

  const geocoded = await geocode(teamQuery.data()["address"].replace('\n', ' '));
  const coords = [parseFloat(geocoded.lat), parseFloat(geocoded.lon)];

  const team = (() => {
    let googleDriveRegex = /file\/d\/(.+)\/view/g.exec(teamQuery.data()["logo"]);

    let imgURL;
    if (googleDriveRegex) {
      imgURL = `https://lh3.googleusercontent.com/d/${googleDriveRegex[1]}=s200`;
    } else {
      imgURL = teamQuery.data()["logo"];
    }
    return {
      slug: slugify(teamQuery.id),
      schoolOrClub: teamQuery.data()["school/club"],
      name: teamQuery.id,
      address: teamQuery.data()["address"],
      teamTypes: teamQuery.data()["m/w"],
      scullSweep: teamQuery.data()["scull/sweep"],
      logoURL: imgURL,
      contact: teamQuery.data()["contact"],
      website: teamQuery.data()["website"],
      age: teamQuery.data()["age"],
      email: teamQuery.data()["email"],
    }
  })();

  const subTeamRef = collection(db, "teams", teamName, "teams")
  const subTeamQuery = await getDocs(subTeamRef);

  let subList = []
  
  subTeamQuery.forEach((doc) => {
    const subTeam = 
    {
      name: doc.id,
      coach: doc.data()["coach"],
      schedule: doc.data()["schedule"],
      size: doc.data()["size"],
      email: doc.data()["email"],
    }
    subList.push(subTeam);
  })

  const subTeam = subList.map((doc) => {
    return {
      name: doc.id,
      coach: doc.coach,
      schedule: doc.schedule,
      size: doc.size,
      email: doc.email,
    }
  })

  return {
    team,
    coords,
    subList,
  };
};

const countChar = () => {
  const textArea = document.getElementById("comment").value
  document.getElementById("current").value = textArea.length
}

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
//   return {
//     basicInfo,
//     coords,
//     teamRows,
//     allTeamsInfo,
//   };
// };
