// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5jTZD-rGMMV2cZLUjUAMCwiVTl5uphf0",
  authDomain: "finalyearproject-b608e.firebaseapp.com",
  databaseURL: "https://finalyearproject-b608e-default-rtdb.firebaseio.com",
  projectId: "finalyearproject-b608e",
  storageBucket: "finalyearproject-b608e.appspot.com",
  messagingSenderId: "769618008164",
  appId: "1:769618008164:web:ab93095a5c87e66c0d6771",
  measurementId: "G-JEXTR1KT4E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const database = getDatabase(app);