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
    getGameObj("supermariobros");
    getUserObj("john-doe");
  }, []);

  // Game Object information retrieved from IGDB https://www.igdb.com/
  const [gameObj, setGameObj] = useState({});
  const [userObj, setUserObj] = useState({});
  let gamePath = gameObj.path;

  //async functions to get data from firebase
  async function getGameObj(game) {
    const temp = await handleGameRequest(game);
    setGameObj(temp);
  }

  async function getUserObj(user) {
    setUserObj(await handleUserRequest("john-doe"));
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
            <Route path="/" element={<Homepage />} />
            <Route
              path="/game/:gamePath"
              element={<GamePage gameObject={gameObj} />}
            />
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
