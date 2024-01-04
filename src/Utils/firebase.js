// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAITZndO2l12DDj821H38KMHydHRVdYj4o",
  authDomain: "netflix-gpt-e1bce.firebaseapp.com",
  projectId: "netflix-gpt-e1bce",
  storageBucket: "netflix-gpt-e1bce.appspot.com",
  messagingSenderId: "443318719330",
  appId: "1:443318719330:web:d665e2dae52411a854923b",
  measurementId: "G-YHQHHCQWQ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();