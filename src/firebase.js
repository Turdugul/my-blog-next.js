// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "my-blog-f47a4.firebaseapp.com",
  projectId: "my-blog-f47a4",
  storageBucket: "my-blog-f47a4.firebasestorage.app",
  messagingSenderId: "926419234234",
  appId: "1:926419234234:web:774c6ce26096ad61530183"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);