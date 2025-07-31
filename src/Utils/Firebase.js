// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFpgKthugrsbak9CgczJtvPGHKOFWB540",
  authDomain: "moviegpt-15bf0.firebaseapp.com",
  projectId: "moviegpt-15bf0",
  storageBucket: "moviegpt-15bf0.firebasestorage.app",
  messagingSenderId: "728726525783",
  appId: "1:728726525783:web:46edc381c2bc2ca5fe5012",
  measurementId: "G-MFHLPEKGJL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();