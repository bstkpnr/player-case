
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuVzVRCtn0PJl0UvC-T8B7VGP9LzB9P-o",
  authDomain: "player-task-41fbb.firebaseapp.com",
  projectId: "player-task-41fbb",
  storageBucket: "player-task-41fbb.appspot.com",
  messagingSenderId: "940680839989",
  appId: "1:940680839989:web:cf2006b9672d1c9c5ac27c",
  measurementId: "G-M8TDVSD6Y9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {db}