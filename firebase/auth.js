import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { firebaseApp } from "./firebaseConfig";

const auth = getAuth(firebaseApp);

export const firebaseAuth = {
  login: (email, password) => signInWithEmailAndPassword(auth, email, password),
  signup: (email, password) => createUserWithEmailAndPassword(auth, email, password),
  logout: () => signOut(auth),
};
