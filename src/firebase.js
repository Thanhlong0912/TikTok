// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMyge1dGR2pGr30-mypRnW6zwfvbuiUwk",
  authDomain: "tiktok-569ce.firebaseapp.com",
  projectId: "tiktok-569ce",
  storageBucket: "tiktok-569ce.appspot.com",
  messagingSenderId: "22757746941",
  appId: "1:22757746941:web:60ad950f30a9fe3a6b3694"
};

// Initialize Firebase
const app=  firebase.initializeApp(firebaseConfig);
const db = app.firestore();
export default db;