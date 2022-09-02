// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBx1OoUBYKZHEWj4VlW8EEDOp5E4IbknNg",
  authDomain: "medium-clone-7fa28.firebaseapp.com",
  projectId: "medium-clone-7fa28",
  storageBucket: "medium-clone-7fa28.appspot.com",
  messagingSenderId: "698867991407",
  appId: "1:698867991407:web:964a0204cdd8db3408de9a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export { provider, auth, db };
