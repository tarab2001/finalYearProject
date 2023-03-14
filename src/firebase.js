// Import the function  from the SDKs 
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";


// app's Firebase configuration
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
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);