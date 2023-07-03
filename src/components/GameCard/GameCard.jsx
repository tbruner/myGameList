import "./GameCard.css";

function GameCard({ game }) {
  const gamePagePath = "/game/" + game.path;
  return (
    <a href={gamePagePath} className="game-card">
      <img src={game.image}></img>
      <div className="game-card-title">{game.title}</div>
    </a>
  );
}

export default GameCard;
