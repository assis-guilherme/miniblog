import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDa5VOepjg1ZEghRHYvwlNd7CBHY7lE8Sk",
  authDomain: "miniblog-345c4.firebaseapp.com",
  projectId: "miniblog-345c4",
  storageBucket: "miniblog-345c4.appspot.com",
  messagingSenderId: "566967943323",
  appId: "1:566967943323:web:9cb45c31d2f816f0e7463e",
  measurementId: "G-8X0R447Z4V",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export { db };
