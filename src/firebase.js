// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
//import {getFirestore} from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlTOCv-dmJMuERApF5XVVAMaIKjS8-ay8",
  authDomain: "finalyearproject-c4c6b.firebaseapp.com",
  databaseURL: "https://finalyearproject-c4c6b-default-rtdb.firebaseio.com",
  projectId: "finalyearproject-c4c6b",
  storageBucket: "finalyearproject-c4c6b.appspot.com",
  messagingSenderId: "934887641702",
  appId: "1:934887641702:web:527b04aa61c81084fb93a7",
  measurementId: "G-564M02QZ32"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

//export const database = getFirestore(app);
export const auth = getAuth(app);
export const database = getDatabase(app);