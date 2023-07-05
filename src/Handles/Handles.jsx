import { doc, getDoc, setDoc } from "@firebase/firestore";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
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

export async function handleUserRequest(userId) {
  const userRef = doc(firestore, "user-list", userId);
  const userSnap = await getDoc(userRef);
  if (userSnap.exists()) {
    return userSnap.data();
  } else {
    console.error("No such data");
    return null;
  }
}

export async function createUser(userId, name) {
  try {
    await setDoc(doc(firestore, "user-list", userId), {
      name: name,
      backlog: "0",
      completed: "0",
      playingTime: "0hrs",
      avatar: null,
      coverImg: "/src/assets/cover-placeholder.png",
    });
  } catch (error) {
    console.error("Error adding user", error);
  }
}

export async function signInWithGoogle() {
  // Sign in Firebase using popup auth and Google as the identity provider.
  var provider = new GoogleAuthProvider();
  return await signInWithPopup(getAuth(), provider)
    .then((result) => {
      return result.user;
    })
    .catch((error) => {
      console.error(error);
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
      console.error(error);
    });
}

export async function getImage(filepath) {
  const storage = getStorage();
  const imageRef = ref(storage, filepath);
  return getDownloadURL(imageRef)
    .then((url) => {
      return url;
    })
    .catch((error) => {
      console.error(error);
      return null;
    });
}

initFirebaseAuth();
