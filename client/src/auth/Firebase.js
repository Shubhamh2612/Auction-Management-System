// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: `AIzaSyAzDSbPRX7ewOqQAsbXumJJ2OJSBBOzJT0`,
  authDomain: `auction-management-syste-4617d.firebaseapp.com`,
  projectId: `auction-management-syste-4617d`,
  storageBucket: `auction-management-syste-4617d.appspot.com`,
  messagingSenderId: `377506888053`,
  appId: `1:377506888053:web:f62d0b960bb583f3d7fb3c`,
  measurementId: `G-BEMDQBPE81`
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => signInWithPopup(auth, provider);
