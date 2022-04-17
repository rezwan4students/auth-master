// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAC41MIl5bd4qSTd5DTz03iMS8rl1L2xlg",
  authDomain: "immigration-consultancy.firebaseapp.com",
  projectId: "immigration-consultancy",
  storageBucket: "immigration-consultancy.appspot.com",
  messagingSenderId: "326541100380",
  appId: "1:326541100380:web:19ed23df5a757b3b562d99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;