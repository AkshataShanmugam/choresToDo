// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase } from 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAktdYPOVydL3Vz1op1wBFGKItuPNjN4Jw",
  authDomain: "chores-todo-70e4f.firebaseapp.com",
  projectId: "chores-todo-70e4f",
  storageBucket: "chores-todo-70e4f.appspot.com",
  messagingSenderId: "754988393119",
  appId: "1:754988393119:web:99626658b2dafb7c5e38aa",
  databaseURL: "https://chores-todo-70e4f-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };