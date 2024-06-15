// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCguGfQrZVMYe-c-3k1mfMMdfMMVwQxuvA",
  authDomain: "portfolio-f0098.firebaseapp.com",
  projectId: "portfolio-f0098",
  storageBucket: "portfolio-f0098.appspot.com",
  messagingSenderId: "605088695008",
  appId: "1:605088695008:web:baf87098e78b57bce00685",
  measurementId: "G-5WZ05MTE6B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);