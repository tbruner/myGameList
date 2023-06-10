import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GamePage from "./GamePage.jsx";
import Homepage from "./Homepage.jsx";
import Profile from "./Profile.jsx";
import TitleBar from "./TitleBar.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <TitleBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
