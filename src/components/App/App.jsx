import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GamePage from "../GamePage.jsx";
import Homepage from "../Homepage.jsx";
import Profile from "../Profile.jsx";
import TitleBar from "../TitleBar/TitleBar.jsx";
import "./App.css";

function App() {
  return (
    <>
      <TitleBar />
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/game" element={<GamePage />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
