import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';
// import 'dotenv/config';

// console.log(process.env.databaseURL)
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "1",
  authDomain: "1",
  projectId: "1",
  messagingSenderId: "1",
  appId: "1",
  databaseURL: "1",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };