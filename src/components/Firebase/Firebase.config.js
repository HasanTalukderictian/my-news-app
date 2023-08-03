// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// console.log("Environment variable key",process.env.SKIP_PREFLIGHT_CHECK);

const firebaseConfig = {
  apiKey: "AIzaSyAhQ8L9epFxN9h3GfLVrzbwgvSx-tLw4d0",
  authDomain: "the-news-dragon-3f5b8.firebaseapp.com",
  projectId: "the-news-dragon-3f5b8",
  storageBucket: "the-news-dragon-3f5b8.appspot.com",
  messagingSenderId: "45128663529",
  appId: "1:45128663529:web:37951db9158082d012cb78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;