import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GamePage from "../GamePage/GamePage.jsx";
import Homepage from "../Homepage/Homepage.jsx";
import Profile from "../Profile/Profile.jsx";
import TitleBar from "../TitleBar/TitleBar.jsx";
import "./App.css";

function App() {
  // Game Object information retrieved from IGDB https://www.igdb.com/
  let gameObject = {
    title: "Pacman",
    developer: "Namco",
    publisher: "Wiz",
    image: null,
    description:
      "Pac-Man is an arcade game developed by Namco and first released in Japan on May 22, 1980. it is considered one of the classics of the medium, virtually synonymous with video games, and an icon of 1980s popular culture. The player controls Pac-Man through a maze, eating pac-dots (also called pellets or just dots). When all pac-dots are eaten, Pac-Man is taken to the next stage. Four enemies (Blinky, Pinky, Inky and Clyde) roam the maze, trying to catch Pac-Man. If an enemy touches Pac-Man, a life is lost and the Pac-Man itself withers and dies. When all lives have been lost, the game ends. Near the corners of the maze are four larger, flashing dots known as power pellets that provide Pac-Man with the temporary ability to eat the enemies. The enemies turn deep blue, reverse direction and usually move more slowly. When an enemy is eaten, its eyes remain and return to the center box where it is regenerated in its normal color. Blue enemies flash white to signal that they are about to become dangerous again and the length of time for which the enemies remain vulnerable varies from one stage to the next, generally becoming shorter as the game progresses.",
    genres: ["arcade", "high-score"],
    platforms: [
      "Arcade",
      "Windows PC",
      "Palm OS",
      "Xbox 360",
      "Blackberry",
      "Windows Phone",
    ],
    score: 3.4,
    completionTime: "1hr 24min",
  };

  return (
    <>
      <TitleBar />
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route
              path="/game"
              element={<GamePage gameObject={gameObject} />}
            />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
