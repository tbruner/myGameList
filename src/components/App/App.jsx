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
  signInWithGoogle,
} from "../../Handles/Handles.jsx";

function App() {
  useEffect(() => {
    getUserObj("john-doe");
    getTrending();
  }, []);

  const [userObj, setUserObj] = useState({});
  const [trendingGames, setTrendingGames] = useState([]);

  //async functions to get data from firebase
  async function getUserObj(user) {
    setUserObj(await handleUserRequest(user));
  }

  async function getTrending() {
    const game1 = await handleGameRequest("supermariobros");
    const game2 = await handleGameRequest("pacman");
    const game3 = await handleGameRequest("metalgearsolid");
    const temp = [game1, game2, game3];
    setTrendingGames(temp);
  }

  function signIn() {
    signInWithGoogle();
  }

  return (
    <>
      <TitleBar signIn={signIn} />
      <main>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<Homepage trendingGames={trendingGames} />}
            />
            <Route path="/game/:gamePath" element={<GamePage />} />
            <Route path="/profile" element={<Profile userObject={userObj} />} />
            <Route path="*" element={<NoMatch />}></Route>
          </Routes>
        </BrowserRouter>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
