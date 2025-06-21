import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyCfcy0KA3fK5rXfftPkk4HKSFqxH4u50l0",
  authDomain:  "medical-chatbot-3ccc2.firebaseapp.com",
  projectId: "medical-chatbot-3ccc2",
  storageBucket:"medical-chatbot-3ccc2.firebasestorage.app",
  messagingSenderId: "1083097145119",
  appId:"1:1083097145119:web:5b19d7c0bd506bc5961a2a",
  measurementId:  "G-S6MZLNY940",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
const GoogleProvider = new GoogleAuthProvider();
const GithubProvider = new GithubAuthProvider();
export const db = getFirestore();
export { auth, GoogleProvider, GithubProvider };
