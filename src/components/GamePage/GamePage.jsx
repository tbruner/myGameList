import "./GamePage.css";

function GamePage() {
  let gameScore = "-";
  let gameScoreStyle = {
    backgroundColor: "hsl(120, 9%, 46%)",
  };

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
      <div className="main-game-card">
        <h2 className="game-title">Game Title</h2>

        <p className="game-credits">developer, publisher</p>
        <img src="src/assets/game-art-placeholder.png" alt="game-art"></img>
      </div>

      <div className="game-info">
        <p className="game-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Cum sociis
          natoque penatibus et magnis. Curabitur vitae nunc sed velit dignissim
          sodales ut eu. Ipsum dolor sit amet consectetur.
        </p>
        <div className="platforms-genres">
          <div className="platforms">
            <div>Platforms</div>
            <div>Nintendo Switch</div>
            <div>Steam</div>
            <div>Xbox Series X|S</div>
            <div>Windows PC</div>
          </div>
          <div className="genres">
            <div>Genres</div>
            <div>Adventure</div>
            <div>Action</div>
            <div>Platformer</div>
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
          <div>Time to Beat</div>
          <div className="avg-game-time">9 hours</div>
          <button className="submit-time">Submit Time</button>
        </div>
      </div>
    </div>
  );
}

export default GamePage;
