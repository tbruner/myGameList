import "./GamePage.css";
import gameArtPlaceholder from "/src/assets/game-art-placeholder.png";
import { getImage } from "../../Handles/Handles.jsx";
import { useEffect, useState } from "react";

function GamePage({ gameObject }) {
  const gameScore = gameObject.score;
  const [gameArt, setGameArt] = useState(gameArtPlaceholder);
  useEffect(() => {
    if (gameObject.image) {
      setGameArt(gameObject.image);
    }
  }, [gameObject]);

  let gameScoreStyle = {
    backgroundColor: "hsl(120, 9%, 46%)",
  };
  const platforms = gameObject.platforms ?? [];
  const genres = gameObject.genres ?? [];

  //gameScore background color; rating from 0 to 5
  if (gameScore === 5) {
    gameScoreStyle = { backgroundColor: "#00BC29" };
  } else if (gameScore < 5 && gameScore >= 4) {
    gameScoreStyle = { backgroundColor: "#39DC2D" };
  } else if (gameScore < 4 && gameScore >= 3) {
    gameScoreStyle = { backgroundColor: "#B4D631" };
  } else if (gameScore < 3 && gameScore >= 2) {
    gameScoreStyle = { backgroundColor: "#FFC739" };
  } else if (gameScore < 2 && gameScore >= 1) {
    gameScoreStyle = { backgroundColor: "#FFA44A" };
  } else if (gameScore < 1 && gameScore >= 0) {
    gameScoreStyle = { backgroundColor: "#FF003E" };
  }

  return (
    <div className="game-page">
      <div className="game-section">
        <div className="main-game-card">
          <h2 className="game-title">{gameObject.title}</h2>
          <p className="game-credits">
            {gameObject.developer}, {gameObject.publisher}
          </p>
          <img id="gameArt" src={gameArt} alt="game-art"></img>
        </div>
        <div className="game-info">
          <p className="game-description">{gameObject.description}</p>
          <div className="platforms-genres">
            <div className="platforms">
              <div className="game-info-heading">Platforms</div>
              {platforms.map((platform) => (
                <div key={platform + gameObject.title}>{platform}</div>
              ))}
            </div>
            <div className="genres">
              <div className="game-info-heading">Genres</div>
              {genres.map((genre) => (
                <div key={genre + gameObject.title}>{genre}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="game-score-time">
          <div className="game-score-card">
            <div>Score</div>
            <div className="avg-game-score" style={gameScoreStyle}>
              {gameScore}
            </div>
            <button className="submit-score">Submit Score</button>
          </div>
          <div className="game-time-card">
            <div>Average Completion Time</div>
            <div className="avg-game-time">{gameObject.completionTime}</div>
            <button className="submit-time">Submit Time</button>
          </div>
        </div>
      </div>
      <div className="game-info-credit">
        All game information is taken from{" "}
        <a href="https://www.igdb.com/" target="_blank" rel="noopener">
          IGDB.com
        </a>
      </div>
    </div>
  );
}

export default GamePage;
