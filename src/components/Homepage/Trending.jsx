import GameCard from "../GameCard/GameCard";

function Trending({ trendingGames }) {
  return (
    <div className="trending">
      {trendingGames.map((game) => (
        <GameCard key={game.title} game={game} />
      ))}
    </div>
  );
}

export default Trending;
