import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: 'AIzaSyD7NJGNmLmBg3Ex9Svl3PoILAdKMH9m3cs',
  authDomain: 'lab5032.firebaseapp.com',
  projectId: 'lab5032',
  storageBucket: 'lab5032.appspot.com',
  messagingSenderId: '902525717215',
  appId: '1:902525717215:web:653b1762198c9b3370776a'
}

initializeApp(firebaseConfig)
const db = getFirestore()
export default db
