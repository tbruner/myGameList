import "./GamePage.css";
import gameArtPlaceholder from "/src/assets/game-art-placeholder.png";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { handleGameRequest } from "../../Handles/Handles";

function GamePage() {
  let { gamePath } = useParams();

  // Game Object information retrieved from IGDB https://www.igdb.com/
  const [gameObject, setGameObject] = useState({
    title: "Game",
    gameScore: "-",
    developer: "developer",
    publisher: "publisher",
    description: "game description",
    completionTime: "-",
    platforms: [],
    genres: [],
    image: gameArtPlaceholder,
  });

  useEffect(() => {
    getGameObj(gamePath);
  }, []);

  let gameScoreStyle = {
    backgroundColor: "hsl(120, 9%, 46%)",
  };

  //gameScore background color; rating from 0 to 5
  if (gameObject.gameScore === 5) {
    gameScoreStyle = { backgroundColor: "#00BC29" };
  } else if (gameObject.gameScore < 5 && gameObject.gameScore >= 4) {
    gameScoreStyle = { backgroundColor: "#39DC2D" };
  } else if (gameObject.gameScore < 4 && gameObject.gameScore >= 3) {
    gameScoreStyle = { backgroundColor: "#B4D631" };
  } else if (gameObject.gameScore < 3 && gameObject.gameScore >= 2) {
    gameScoreStyle = { backgroundColor: "#FFC739" };
  } else if (gameObject.gameScore < 2 && gameObject.gameScore >= 1) {
    gameScoreStyle = { backgroundColor: "#FFA44A" };
  } else if (gameObject.gameScore < 1 && gameObject.gameScore >= 0) {
    gameScoreStyle = { backgroundColor: "#FF003E" };
  }

  async function getGameObj(game) {
    const temp = await handleGameRequest(game);
    if (temp) setGameObject(temp);
  }

  return (
    <div className="game-page">
      <div className="game-section">
        <div className="main-game-card">
          <h2 className="game-title">{gameObject.title}</h2>
          <p className="game-credits">
            {gameObject.developer}, {gameObject.publisher}
          </p>
          <img id="gameArt" src={gameObject.image} alt="game-art"></img>
        </div>
        <div className="game-info">
          <p className="game-description">{gameObject.description}</p>
          <div className="platforms-genres">
            <div className="platforms">
              <div className="game-info-heading">Platforms</div>
              {gameObject.platforms.map((platform) => (
                <div key={platform + gameObject.title}>{platform}</div>
              ))}
            </div>
            <div className="genres">
              <div className="game-info-heading">Genres</div>
              {gameObject.genres.map((genre) => (
                <div key={genre + gameObject.title}>{genre}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="game-score-time">
          <div className="game-score-card">
            <div>Score</div>
            <div className="avg-game-score" style={gameScoreStyle}>
              {gameObject.gameScore}
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
