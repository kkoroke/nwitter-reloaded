import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCgJZKKHe6OBS4DVCMzjTBTXF8SxXI9KAI",
  authDomain: "kiot-20240906.firebaseapp.com",
  projectId: "kiot-20240906",
  storageBucket: "kiot-20240906.appspot.com",
  messagingSenderId: "470531995014",
  appId: "1:470531995014:web:7c879293e91afdf90e2807",
  measurementId: "G-GZ979YLQG2"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);
