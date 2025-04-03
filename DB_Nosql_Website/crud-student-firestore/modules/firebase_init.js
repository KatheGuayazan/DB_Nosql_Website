// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFqzEgX7CjV8KKki5vaDyHrcIvKu9Fw5E",
  authDomain: "clase1-b8b55.firebaseapp.com",
  projectId: "clase1-b8b55",
  storageBucket: "clase1-b8b55.firebasestorage.app",
  messagingSenderId: "511548424231",
  appId: "1:511548424231:web:631abd6fd836e3fba14e02",
  measurementId: "G-8R7X5VHDMX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export { db };