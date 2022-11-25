import firebase from 'firebase'

const settings={timestampsInSnapshots: true };

const firebaseConfig={
    apiKey: "AIzaSyDuVzVRCtn0PJl0UvC-T8B7VGP9LzB9P-o",
  projectId: "player-task-41fbb",
  storageBucket: "player-task-41fbb.appspot.com",
  messagingSenderId: "940680839989",
  appId: "1:940680839989:web:cf2006b9672d1c9c5ac27c",
  measurementId: "G-M8TDVSD6Y9"

}
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings(settings);
export default firebase;