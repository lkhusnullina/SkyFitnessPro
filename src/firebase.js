import { initializeApp } from 'firebase/app'
// // import { getAuth, onAuthStateChanged } from 'firebase/auth'
// // import { collection, getDocs, getFirestore } from 'firebase/firestore'
// // import { } from 'firebase/<service>';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

const firebaseApp = initializeApp({
  apiKey: "AIzaSyBAa9OxprPu2EuJEl5vvoRqIzGJ9-FSK48",
  authDomain: "fitness-project-bc4c2.firebaseapp.com",
  databaseURL: "https://fitness-project-bc4c2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fitness-project-bc4c2",
  storageBucket: "fitness-project-bc4c2.appspot.com",
  messagingSenderId: "155881875437",
  appId: "1:155881875437:web:5c0638eea857109e04a9e4"
})
const db = getFirestore(firebaseApp);
const querySnapshot = await getDocs(collection(db, "courses"))
console.log(querySnapshot)

const host = 'https://fitness-project-bc4c2-default-rtdb.asia-southeast1.firebasedatabase.app/';
export async function getAllCourses(){
   const response = await fetch(`https://fitness-project-bc4c2-default-rtdb.asia-southeast1.firebasedatabase.app/courses.json`);
   if(!response.ok) {
      throw new Error("Произошла ошибка");
   } 
   

   console.log(response);
}
getAllCourses()

export default db 