
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBZ1xpLWyNHEDuhSonaa9yoOgkLQiaPx5s",
  authDomain: "deagon-news-62ca2.firebaseapp.com",
  projectId: "deagon-news-62ca2",
  storageBucket: "deagon-news-62ca2.firebasestorage.app",
  messagingSenderId: "371654043471",
  appId: "1:371654043471:web:175b26c52a28d5b377873a",
  measurementId: "G-G71HG6V1BZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export default app;
