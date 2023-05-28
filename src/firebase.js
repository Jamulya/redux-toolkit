import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCoQoBGIQUJLpeDWKVKgJOsVmal2EBWiss",
  authDomain: "lesson7-af25c.firebaseapp.com",
  projectId: "lesson7-af25c",
  storageBucket: "lesson7-af25c.appspot.com",
  messagingSenderId: "23708853311",
  appId: "1:23708853311:web:a3171c31d8c19eedef048a"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app