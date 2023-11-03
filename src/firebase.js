// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { onMount } from 'svelte';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

let db;

onMount(() => {
    const firebaseConfig = {
        apiKey: "AIzaSyA7FX83NEE92ocW1yHJXxEslnGb8-WfhBw",
        authDomain: "shine-70ac4.firebaseapp.com",
        databaseURL: "https://shine-70ac4-default-rtdb.firebaseio.com",
        projectId: "shine-70ac4",
        storageBucket: "shine-70ac4.appspot.com",
        messagingSenderId: "517016238324",
        appId: "1:517016238324:web:6f06db907d84eb85d906a1",
        measurementId: "G-XMW0V39CJB"
      };
     
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    db = getFirestore(app);
})

export default db;