import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";
import { getStorage } from "firebase/storage";

/* -------------------------------------------------------------------------- */
/*  ⚠️  These are real credentials. Anyone who can read your repo or bundle   */
/*      can use them. Rotate the keys if you ever make the project public.    */
/* -------------------------------------------------------------------------- */
const firebaseConfig = {
  apiKey:            "AIzaSyCpqWhxXOdcYo8OsmxcY1FClCtGMcjJRh8",
  authDomain:        "selling-cars-6d539.firebaseapp.com",
  projectId:         "selling-cars-6d539",
  storageBucket:     "selling-cars-6d539.firebasestorage.app",
  messagingSenderId: "780929033956",
  appId:             "1:780929033956:web:4ab125c622a35fda21eef1",
  measurementId:     "G-X78V3B2MTX",
};

// Initialise Firebase -------------------------------------------------------
const app      = initializeApp(firebaseConfig);
export const auth    = getAuth(app);
export const db      = getFirestore(app);
export const storage = getStorage(app);

// Helper wrappers -----------------------------------------------------------
export const googleLogin = () =>
  signInWithPopup(auth, new GoogleAuthProvider());

// Re-usable collection / document helpers
export const carsCol = collection(db, "cars");
export const carDoc  = (id: string) => doc(db, "cars", id);

// Example read function (optional)
/*
export async function getCar(id: string) {
  const snap = await getDoc(carDoc(id));
  return snap.exists() ? snap.data() : null;
}
*/
