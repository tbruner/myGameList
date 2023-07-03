import GameCard from "../GameCard/GameCard";
import "./Trending.css";

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
