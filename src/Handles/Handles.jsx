import { doc, getDoc } from "@firebase/firestore";
import { firestore } from "../firebase";
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export async function handleGameRequest(game) {
  const gameRef = doc(firestore, "game-list", game);
  const gameSnap = await getDoc(gameRef);
  if (gameSnap.exists()) {
    return gameSnap.data();
  } else {
    console.error("No such data");
  }
}

export async function handleUserRequest(username) {
  const userRef = doc(firestore, "user-list", username);
  const userSnap = await getDoc(userRef);
  if (userSnap.exists()) {
    return userSnap.data();
  } else {
    console.error("No such data");
  }
}

export async function signInWithGoogle() {
  // Sign in Firebase using popup auth and Google as the identity provider.
  var provider = new GoogleAuthProvider();
  await signInWithPopup(getAuth(), provider)
    .then((result) => {
      console.log(result.user);
      return result.user;
    })
    .catch((error) => {
      console.log(error);
    });
}

function initFirebaseAuth() {
  // Listen to auth state changes.
  onAuthStateChanged(getAuth(), authStateObserver);
}

function authStateObserver(user) {
  return;
}

export function getUserName() {
  return getAuth().currentUser.displayName;
}

export function isUserSignedIn() {
  return !!getAuth().currentUser;
}

export async function signOutUser() {
  await signOut(getAuth())
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
}

initFirebaseAuth();
