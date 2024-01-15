import db from '/src/firebase.js';

import { doc, collection, query, where, getDoc, getDocs } from "firebase/firestore";

export const load = async () => {

  const collectionRef = collection(db, "images")

  const q = query(collectionRef, where("location", "==", "home top"));

  const images = await getDocs(q);

  let imageList = [];
  images.forEach((doc) => {
     imageList.push(doc.data()["url"]);
  });

  let randIdx = Math.floor(Math.random() * imageList.length)

  let randImage = imageList[randIdx]

  let googleDriveRegex = /file\/d\/(.+)\/view/g.exec(randImage);

  if (googleDriveRegex) {
    randImage = `https://lh3.googleusercontent.com/d/${googleDriveRegex[1]}=s1024`;
  }

  return { randImage };
};