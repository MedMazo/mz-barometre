import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHaiP-e5MLvFrXuUAzFbh5zObWt9rO0ps",
  authDomain: "barometr-6eb0b.firebaseapp.com",
  projectId: "barometr-6eb0b",
  storageBucket: "barometr-6eb0b.appspot.com",
  messagingSenderId: "506915797022",
  appId: "1:506915797022:web:76f94deba4946c57ffd60f"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);