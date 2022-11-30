// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/auth';
import Constants from "expo-constants";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBj1-JJeEoJLwYpIEXEOjvF-1Z6DHkupjo",
  authDomain: "serviceapp-b95f9.firebaseapp.com",
  databaseURL: "https://serviceapp-b95f9-default-rtdb.firebaseio.com",
  projectId: "serviceapp-b95f9",
  storageBucket: "serviceapp-b95f9.appspot.com",
  messagingSenderId: "634733488189",
  appId: "1:634733488189:web:c026847aeb2514e44a2254"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;