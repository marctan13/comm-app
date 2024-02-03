import { initializeApp } from "firebase/app";
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDriIPBcvR3Gpm5aV7DkxzbusSK7K_CNYU",
  authDomain: "chat-project-3ffbe.firebaseapp.com",
  projectId: "chat-project-3ffbe",
  storageBucket: "chat-project-3ffbe.appspot.com",
  messagingSenderId: "545287826955",
  appId: "1:545287826955:web:c3df72bf104cbe59eea10e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
