// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-blog-5429d.firebaseapp.com",
    projectId: "mern-blog-5429d",
    storageBucket: "mern-blog-5429d.appspot.com",
    messagingSenderId: "718721174152",
    appId: "1:718721174152:web:eda4d7dfd6e4930de16d3d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);