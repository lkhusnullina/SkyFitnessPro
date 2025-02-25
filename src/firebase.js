import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import 'firebase/firestore';

const firebaseApp = initializeApp({
  // apiKey: "AIzaSyBAa9OxprPu2EuJEl5vvoRqIzGJ9-FSK48",
  // authDomain: "fitness-project-bc4c2.firebaseapp.com",
  // databaseURL: "https://fitness-project-bc4c2-default-rtdb.asia-southeast1.firebasedatabase.app",
  // projectId: "fitness-project-bc4c2",
  // storageBucket: "fitness-project-bc4c2.appspot.com",
  // messagingSenderId: "155881875437",
  // appId: "1:155881875437:web:5c0638eea857109e04a9e4"
  apiKey: "AIzaSyB0xy1NOVdNs2MhKVhGM8wtDY1_mw9xcX0",
  authDomain: "sport-courses.firebaseapp.com",
  databaseURL: "https://sport-courses-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "sport-courses",
  storageBucket: "sport-courses.firebasestorage.app",
  messagingSenderId: "115471606968",
  appId: "1:115471606968:web:c754ad413c959dcadb804d"
})

const db = getDatabase(firebaseApp)
const auth = getAuth(firebaseApp)

export {firebaseApp, db, auth}