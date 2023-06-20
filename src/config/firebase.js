
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyBULIl0_oAZBr9jy492j4Sa0J2KiCgbraY",
  authDomain: "tiktok---project-62743.firebaseapp.com",
  projectId: "tiktok---project-62743",
  storageBucket: "tiktok---project-62743.appspot.com",
  messagingSenderId: "92489317307",
  appId: "1:92489317307:web:e65d4a6470e4755df6e29e"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
