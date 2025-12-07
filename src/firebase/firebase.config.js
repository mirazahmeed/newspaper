// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHltMfbW9ez_X-WAapjKiE0Wg_Tsb1YHM",
  authDomain: "the-daily-chronicle-news.firebaseapp.com",
  projectId: "the-daily-chronicle-news",
  storageBucket: "the-daily-chronicle-news.firebasestorage.app",
  messagingSenderId: "1075285121708",
  appId: "1:1075285121708:web:6b3c12766029ce84449d09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
