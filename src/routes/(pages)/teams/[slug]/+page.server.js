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

