// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvm95JXaeYOr4mF388BJktuPVGyOAxozs",
  authDomain: "ju-book-express.firebaseapp.com",
  projectId: "ju-book-express",
  storageBucket: "ju-book-express.appspot.com",
  messagingSenderId: "44215538002",
  appId: "1:44215538002:web:0b8fc4d1fc88ba91182a8b"
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

