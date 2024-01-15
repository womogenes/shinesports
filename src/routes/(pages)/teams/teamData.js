import { GAPI_KEY } from '$env/static/private';
import { slugify } from '$lib/utils';

export const fetchSpreadsheet = async (sheetName) => {
  let spreadsheetID = '122yIAMXWzBnx5rYZhnzwix6LSAiOEfdUbItxP6JzWmA';
  let apiURL = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetID}/values/${sheetName}?alt=json&key=${GAPI_KEY}`;
  return (await fetch(apiURL)).json();
};

export const parseSheet1Row = (row) => {
  // Given a row [school/club, team name, address, team gender, scull/sweep, image, rul],
  //   return an object with named keys.

  let googleDriveRegex = /file\/d\/(.+)\/view/g.exec(row[5]);

  let imgURL;
  if (googleDriveRegex) {
    imgURL = `https://lh3.googleusercontent.com/d/${googleDriveRegex[1]}=s200`;
  } else {
    imgURL = row[5];
  }

  return {
    slug: slugify(row[1]),
    schoolOrClub: row[0],
    name: row[1],
    address: row[2],
    teamTypes: row[3],
    scullSweep: row[4],
    logoURL: imgURL,
  };
};

export const parseData = (doc, type) => {

  let googleDriveRegex = /file\/d\/(.+)\/view/g.exec(doc.data()["logo"]);

  let imgURL;
  if (googleDriveRegex) {
    imgURL = `https://lh3.googleusercontent.com/d/${googleDriveRegex[1]}=s200`;
  } else {
    imgURL = doc.data()["logo"];
  }

  if(type == 'crew'){
    return {
      slug: slugify(doc.id),
      schoolOrClub: doc.data()["school/club"],
      name: doc.data()["name"],
      address: doc.data()["address"],
      teamTypes: doc.data()["m/w"],
      scullSweep: doc.data()["scull/sweep"],
      logoURL: imgURL,
    }
  }
  else if(type == 'swim'){
    let addressList = [doc.data()["address"]];
    
    for(let i = 2; i > 0; i++){
      let address = doc.data()["address" + i];
      if(typeof address != "undefined"){
        addressList.push(address);
      }
      else{
        break;
      }
    }
    return {
      slug: slugify(doc.id),
      name: doc.data()["name"],
      address: addressList,
      frank: doc.data()["frank"],
      mrank: doc.data()["mrank"],
      logoURL: imgURL,
    }
  }
  else{
    return false;
  }
};
