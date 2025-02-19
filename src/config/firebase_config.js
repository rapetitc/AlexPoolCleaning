// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAb9Oj2YrAUzUrJG6OKk9jhKqaoQ22r6jQ",
  authDomain: "alexpoolcleanning.firebaseapp.com",
  projectId: "alexpoolcleanning",
  storageBucket: "alexpoolcleanning.appspot.com",
  messagingSenderId: "46977814742",
  appId: "1:46977814742:web:6854fa5c9bcbb3ab9e3977"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);