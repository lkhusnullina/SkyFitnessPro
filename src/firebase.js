import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import 'firebase/firestore';

const firebaseApp = initializeApp({
  apiKey: "AIzaSyBAa9OxprPu2EuJEl5vvoRqIzGJ9-FSK48",
  authDomain: "fitness-project-bc4c2.firebaseapp.com",
  databaseURL: "https://fitness-project-bc4c2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fitness-project-bc4c2",
  storageBucket: "fitness-project-bc4c2.appspot.com",
  messagingSenderId: "155881875437",
  appId: "1:155881875437:web:5c0638eea857109e04a9e4"
})

const db = getDatabase(firebaseApp)
const auth = getAuth(firebaseApp)

export {firebaseApp, db, auth}