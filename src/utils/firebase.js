// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyB2mgg1OzljCoZcmL8idOytjS09mhNZr-4',
  authDomain: 'saku-tambah.firebaseapp.com',
  projectId: 'saku-tambah',
  storageBucket: 'saku-tambah.appspot.com',
  messagingSenderId: '504183399190',
  appId: '1:504183399190:web:f0192253956830a0166637',
  measurementId: 'G-1W4DYSPFBX'
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export { auth, provider, signInWithPopup }
