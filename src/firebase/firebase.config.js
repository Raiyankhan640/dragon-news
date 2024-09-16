// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgKuF-fljgItiWoZ879EUbGXcQ6TYBlcs",
  authDomain: "dragon-news-cdd67.firebaseapp.com",
  projectId: "dragon-news-cdd67",
  storageBucket: "dragon-news-cdd67.appspot.com",
  messagingSenderId: "11465153001",
  appId: "1:11465153001:web:297d2293ff012a7d2fd378"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;