// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDN6sT0C8375eScQgCk1yWNjyigfXZDUpo",
  authDomain: "mygamelist-5048d.firebaseapp.com",
  projectId: "mygamelist-5048d",
  storageBucket: "mygamelist-5048d.appspot.com",
  messagingSenderId: "953119987500",
  appId: "1:953119987500:web:a9615a1df55cda8807be89",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
