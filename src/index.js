import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { store } from './store/index'
import App from './App'
import './index.css'

// import { initializeApp } from 'firebase/app'
// import { getAuth, onAuthStateChanged } from 'firebase/auth'
// import { collection, getDocs, getFirestore } from 'firebase/firestore'

// const firebaseApp = initializeApp({
//   apiKey: "AIzaSyBAa9OxprPu2EuJEl5vvoRqIzGJ9-FSK48",
//   authDomain: "fitness-project-bc4c2.firebaseapp.com",
//   databaseURL: "https://fitness-project-bc4c2-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "fitness-project-bc4c2",
//   storageBucket: "fitness-project-bc4c2.appspot.com",
//   messagingSenderId: "155881875437",
//   appId: "1:155881875437:web:5c0638eea857109e04a9e4"
// })
// const auth = getAuth(firebaseApp)
// const db = getFirestore(firebaseApp)

// //Detect auth state
// onAuthStateChanged(auth, user => {
//   if (user !== null) {
//     console.log("logged in!")
//   } else {
//     console.log("no user");
//   }
// })
// const cursesCol = collection(db, 'courses')
// const snapshot = await getDocs(cursesCol)
// const yoga = 
// console.log(db)
// console.log(snapshot)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
