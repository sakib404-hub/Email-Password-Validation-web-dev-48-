// Danger do not share in the public file
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBN-otxm29j1XJ5ZZT3lb9vzI-RxVr1hVQ",
  authDomain: "email-password-authentic-6d990.firebaseapp.com",
  projectId: "email-password-authentic-6d990",
  storageBucket: "email-password-authentic-6d990.firebasestorage.app",
  messagingSenderId: "841510460403",
  appId: "1:841510460403:web:b4fcfccba6dd7d855d5086",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
