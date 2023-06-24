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
