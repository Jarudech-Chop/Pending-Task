// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCfHgobXDmzGD6bZAeSRS4vAnCnoXU3KYE",
  authDomain: "manday-record.firebaseapp.com",
  projectId: "manday-record",
  storageBucket: "manday-record.firebasestorage.app",
  messagingSenderId: "744520485540",
  appId: "1:744520485540:web:60f08e9995ec2cf9c07431",
  measurementId: "G-H60NW9HNX5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const collectionName = "projectTasks";

export { db, collectionName };
