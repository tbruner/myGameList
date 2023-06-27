import {
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
  collection,
} from "@firebase/firestore";
import { firestore } from "../firebase";

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
