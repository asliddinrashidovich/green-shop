import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB5Rc1Ned6yu7JSkQ8-TzRFTktNmjZELR8",
  authDomain: "loginwith-c4ee5.firebaseapp.com",
  projectId: "loginwith-c4ee5",
  storageBucket: "loginwith-c4ee5.firebasestorage.app",
  messagingSenderId: "295824928730",
  appId: "1:295824928730:web:3a23645dede56a22459ae3",
  measurementId: "G-N8P855H2V4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();

const signInWithGoogle = () => {
    return  signInWithPopup(auth, provider)
}

export {signInWithGoogle}