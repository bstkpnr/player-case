
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA0Lp1ljkXDLwF0k0qf07rOLegXfuuPX4k",
  authDomain: "player-task-81aa3.firebaseapp.com",
  projectId: "player-task-81aa3",
  storageBucket: "player-task-81aa3.appspot.com",
  messagingSenderId: "61578606957",
  appId: "1:61578606957:web:1d3ee44efb6a406089c264",
  measurementId: "G-XP644HJRPB"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {db}