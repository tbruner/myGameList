import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GamePage from "../GamePage/GamePage.jsx";
import Homepage from "../Homepage/Homepage.jsx";
import Profile from "../Profile/Profile.jsx";
import TitleBar from "../TitleBar/TitleBar.jsx";
import "./App.css";
import {
  handleGameRequest,
  handleUserRequest,
} from "../../Handles/Handles.jsx";

function App() {
  useEffect(() => {
    getGameObj("pacman");
    getUserObj("john-doe");
  }, []);

  // Game Object information retrieved from IGDB https://www.igdb.com/
  const [gameObj, setGameObj] = useState({});
  const [userObj, setUserObj] = useState({});

  //async functions to get data from firebase
  async function getGameObj(game) {
    const temp = await handleGameRequest(game);
    setGameObj(temp);
  }

  async function getUserObj(user) {
    setUserObj(await handleUserRequest("john-doe"));
  }

  return (
    <>
      <TitleBar />
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/game" element={<GamePage gameObject={gameObj} />} />
            <Route path="/profile" element={<Profile userObject={userObj} />} />
          </Routes>
        </BrowserRouter>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
