import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCA2p63tONk1dXepC3SQ-4EhEfsidsAGLA",
  authDomain: "fir-course-tanmay.firebaseapp.com",
  projectId: "fir-course-tanmay",
  storageBucket: "fir-course-tanmay.appspot.com",
  messagingSenderId: "404279516500",
  appId: "1:404279516500:web:aad49428814534b0017cc1",
  measurementId: "G-6WXB2S572D",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
