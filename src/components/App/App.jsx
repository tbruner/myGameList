import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GamePage from "../GamePage/GamePage.jsx";
import Homepage from "../Homepage/Homepage.jsx";
import Profile from "../Profile/Profile.jsx";
import TitleBar from "../TitleBar/TitleBar.jsx";
import NoMatch from "../NoMatch.jsx";
import "./App.css";
import {
  handleGameRequest,
  handleUserRequest,
  isUserSignedIn,
  signInWithGoogle,
  signOutUser,
  createUser,
} from "../../Handles/Handles.jsx";

function App() {
  useEffect(() => {
    getTrending();
  }, []);

  const [trendingGames, setTrendingGames] = useState([]);
  const [userId, setUserId] = useState(null);

  //async function to get data from firebase
  async function getTrending() {
    const game1 = await handleGameRequest("supermariobros");
    const game2 = await handleGameRequest("pacman");
    const game3 = await handleGameRequest("metalgearsolid");
    const temp = [game1, game2, game3];
    setTrendingGames(temp);
  }

  async function signIn() {
    const { uid, displayName } = await signInWithGoogle();
    const doesUserExist = await handleUserRequest(uid);

    if (!doesUserExist) {
      createUser(uid, displayName);
    }
    setUserId(uid);
  }

  function signOut() {
    signOutUser();
    const { uid } = isUserSignedIn();
    setUserId(uid);
  }

  return (
    <>
      <TitleBar signIn={signIn} signOut={signOut} userId={userId} />
      <main>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<Homepage trendingGames={trendingGames} />}
            />
            <Route path="/game/:gamePath" element={<GamePage />} />
            <Route path="/profile/:user" element={<Profile />} />
            <Route path="*" element={<NoMatch />}></Route>
          </Routes>
        </BrowserRouter>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
