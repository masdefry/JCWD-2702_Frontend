// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVQUAUsgmtrRX-OOEXBgZ8MgGZfizhaBM",
  authDomain: "pos-app-5fbf1.firebaseapp.com",
  projectId: "pos-app-5fbf1",
  storageBucket: "pos-app-5fbf1.appspot.com",
  messagingSenderId: "428040035928",
  appId: "1:428040035928:web:6f6dda06b1fa3c8e43742d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
