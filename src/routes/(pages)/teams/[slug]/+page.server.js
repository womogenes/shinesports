import { fetchSpreadsheet, parseSheet1Row, parseData } from '../teamData.js';

import db from '/src/firebase.js';

import { doc, collection, query, where, getDoc, getDocs } from "firebase/firestore";

import { geocode } from '$lib/geocode.js';
import { slugify } from '$lib/utils.js';

export const load = async ({ params }) => {
  // Search for this team in the spreadsheet
  // const sheet1 = await fetchSpreadsheet('Sheet1');

  const teamNameList = params.slug.split("-");

  const type = teamNameList.pop();

  const teamName = (() => {
    let currName = "";
    teamNameList.forEach((word) => {
      currName += word;
      currName += " ";
    })
    currName = currName.substr(0, currName.length - 1);
    return(currName)
  })()

  const teamRef = doc(db, type, teamName);
  const teamQuery = await getDoc(teamRef);

  let addressList;
  let geocoded;
  let coords;

  if(type == "crew"){
    if(teamQuery.data()["address"] === "175 Emigrant Lake Rd, Ashland, OR 97520"){ // Hard coded location
      coords = [42.15332645390886, -122.62117574907515]
    }
    else{
      geocoded = await geocode(teamQuery.data()["address"].replace('\n', ' '));
      coords = [parseFloat(geocoded.lat), parseFloat(geocoded.lon)];
    }
  }
  else if(type == "swim"){
    addressList = [teamQuery.data()["address"]];
    geocoded = await geocode(teamQuery.data()["address"].replace('\n', ' '));
    coords = [[parseFloat(geocoded.lat), parseFloat(geocoded.lon)]];
    for(let i = 2; i > 0; i++){
      let address = teamQuery.data()["address" + i];
      if(typeof address != "undefined"){
        addressList.push(address);
        // console.log(address)

        if(address === "4280 Klahanie Dr. SE, Issaquah, WA 98029"){ // Hard coded location
          coords.push([47.568286194331826, -122.00197205767105])
        }
        else{
          geocoded = await geocode(address.replace('\n', ' '));
          coords.push([parseFloat(geocoded.lat), parseFloat(geocoded.lon)]);
        }
      }
      else{
        break;
      }
    }
  }

  const team = (() => {
    let googleDriveRegex = /file\/d\/(.+)\/view/g.exec(teamQuery.data()["logo"]);

    let imgURL;
    if (googleDriveRegex) {
      imgURL = `https://lh3.googleusercontent.com/d/${googleDriveRegex[1]}=s200`;
    } else {
      imgURL = teamQuery.data()["logo"];
    }
    if(type == "crew"){
      return {
        slug: slugify(teamQuery.id),
        ref: teamName,
        schoolOrClub: teamQuery.data()["school/club"],
        name: teamQuery.data()["name"],
        address: teamQuery.data()["address"],
        teamTypes: teamQuery.data()["m/w"],
        scullSweep: teamQuery.data()["scull/sweep"],
        logoURL: imgURL,
        contact: teamQuery.data()["contact"],
        website: teamQuery.data()["website"],
        age: teamQuery.data()["age"],
        email: teamQuery.data()["email"],
      }
    }
    else if(type == "swim"){
      return {
        slug: slugify(teamQuery.id),
        ref: teamName,
        name: teamQuery.data()["name"],
        address: addressList,
        website: teamQuery.data()["website"],
        swimcloud: teamQuery.data()["swimcloud"],
        frank: teamQuery.data()["frank"],
        mrank: teamQuery.data()["mrank"],
        logoURL: imgURL,
      }
    }
  })();

  let subList = []
  if(type == "crew"){
    const subTeamRef = collection(db, type, teamName, "teams")
    const subTeamQuery = await getDocs(subTeamRef);
    
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
  }

    
  const teamReviewRef = collection(db, type, teamName, "reviews")
  const teamReview = await getDocs(teamReviewRef);

  let starsList = []

  let statsList = []
  
  teamReview.forEach((doc) => {
    const review = 
    {
      id: doc.id,
      username: doc.data()["username"],
      star: doc.data()["star"],
      title: doc.data()["title"],
      comment: doc.data()["comment"],
      time: doc.data()["time"],
      type: doc.data()["type"],
      edited: doc.data()["edited"],
    }

    if(doc.data()["type"] == "star" || doc.data()["type"] == "both"){
        const review = 
        {
          id: doc.id,
          username: doc.data()["username"],
          star: doc.data()["star"],
          title: doc.data()["title"],
          comment: doc.data()["comment"],
          time: doc.data()["time"],
          type: doc.data()["type"],
          edited: doc.data()["edited"],
        }
        starsList.push(review);
      }
      if(doc.data()["type"] == "stats" || doc.data()["type"] == "both"){
        const review = 
        {
          id: doc.id,
          username: doc.data()["username"],
          time: doc.data()["time"],
          type: doc.data()["type"],
          stats: doc.data()["stats"]
        }
        statsList.push(review);
      }
    const compareTime = (a, b) => {
      return b.time - a.time;
    }

    starsList = starsList.sort(compareTime);
    statsList = statsList.sort(compareTime);
  })

  const compareTime = (a, b) => {
    return b.time - a.time;
  }

  starsList = starsList.sort(compareTime);

  return {
    type,
    team,
    coords,
    subList,
    starsList,
    statsList,
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
//   return {
//     basicInfo,
//     coords,
//     teamRows,
//     allTeamsInfo,
//   };
// };
