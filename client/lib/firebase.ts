import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAcqnpXZDuGxRKi3KGo24i3NER62tIFxuo",
  authDomain: "emep-81e20.firebaseapp.com",
  projectId: "emep-81e20",
  storageBucket: "emep-81e20.firebasestorage.app",
  messagingSenderId: "950542308559",
  appId: "1:950542308559:web:1efbd5cadcf7fa1a7e13ba",
  measurementId: "G-EGM0YNYSP0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);

export default app;
