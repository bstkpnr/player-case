
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBU_Jmhyibv2tpxR1SmFBzlgR9T_fPsXhI",
  authDomain: "player-task-4416c.firebaseapp.com",
  projectId: "player-task-4416c",
  storageBucket: "player-task-4416c.appspot.com",
  messagingSenderId: "562273337968",
  appId: "1:562273337968:web:2a61838bbfc5c212ff6ab5",
  measurementId: "G-DF3LQ8WBCT"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {db}