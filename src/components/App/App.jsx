import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GamePage from "../GamePage/GamePage.jsx";
import Homepage from "../Homepage/Homepage.jsx";
import Profile from "../Profile/Profile.jsx";
import TitleBar from "../TitleBar/TitleBar.jsx";
import "./App.css";
import { handleGameRequest } from "../../Handles/Handles.jsx";

function App() {
  useEffect(() => {
    getGameObj("pacman");
  }, []);

  // Game Object information retrieved from IGDB https://www.igdb.com/
  const [gameObj, setGameObj] = useState({});

  // User Object template
  let userObject = {
    name: "username",
    coverImg: null,
    avatar: null,
    playtime: "0 min",
    completed: 0,
    backlog: 0,
  };

  //temp function to test firebase
  async function getGameObj(game) {
    const temp = await handleGameRequest(game);
    setGameObj(temp);
  }

  return (
    <>
      <TitleBar />
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/game" element={<GamePage gameObject={gameObj} />} />
            <Route
              path="/profile"
              element={<Profile userObject={userObject} />}
            />
          </Routes>
        </BrowserRouter>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
