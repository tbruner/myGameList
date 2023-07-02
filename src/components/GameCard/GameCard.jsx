function GameCard({ game }) {
  return (
    <div className="game-card">
      <img src={game.image}></img>
      <div className="game-card-title">{game.title}</div>
    </div>
  );
}

export default GameCard;
