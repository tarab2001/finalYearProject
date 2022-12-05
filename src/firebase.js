// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
//import {getFirestore} from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCORxIUyAkCj28HZW9AiPg0GwcqTB6J0NM",
  authDomain: "finalyearproject2-4da3f.firebaseapp.com",
  databaseURL: "https://finalyearproject2-4da3f-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "finalyearproject2-4da3f",
  storageBucket: "finalyearproject2-4da3f.appspot.com",
  messagingSenderId: "770932014444",
  appId: "1:770932014444:web:5e126fa31c9948ef3f8749",
  measurementId: "G-VRNBXTM5D3"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

//export const database = getFirestore(app);

export const database = getDatabase(app);