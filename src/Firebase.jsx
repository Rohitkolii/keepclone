// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4J8iwwGrxldK0YQBBJlHX4fQ02DiDbdk",
  authDomain: "todoapp-c461c.firebaseapp.com",
  projectId: "todoapp-c461c",
  storageBucket: "todoapp-c461c.appspot.com",
  messagingSenderId: "644576389849",
  appId: "1:644576389849:web:be4e75f3a112770a3c6cc8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app)