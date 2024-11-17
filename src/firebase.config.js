// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCASrr47ELV40_r2zZ6B-N1ZCyLoqIatFg",
  authDomain: "coupon-collector-43c01.firebaseapp.com",
  projectId: "coupon-collector-43c01",
  storageBucket: "coupon-collector-43c01.firebasestorage.app",
  messagingSenderId: "631814753462",
  appId: "1:631814753462:web:0451f01abfcda040df6a17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;