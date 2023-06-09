import Trending from "./Trending.jsx";
import "./Homepage.css";
import heroImage from "/src/assets/Zelda-Breath-of-the-Wild.jpg";

function Homepage({ trendingGames }) {
  return (
    <>
      <section className="home-section hero">
        <div className="content">
          <h1>Welcome to MyGameList</h1>
          Login or join today and...
          <ul>
            <li>
              Use completion times to help you conquer your gaming backlog
            </li>
            <li>
              Share your Game List with friends and show off your favorites
            </li>
            <li>
              Check out game ratings and discover new games to add to your
              collection
            </li>
            <li>Discuss your favorite games in the fourm</li>
          </ul>
        </div>
        <img className="hero-img" src={heroImage}></img>
      </section>
      <section className="home-section trending-games">
        <h2>Trending Games</h2>
        <Trending trendingGames={trendingGames} />
      </section>
      <section className="home-section fourm">
        <h2>Fourm</h2>
      </section>
    </>
  );
}

export default Homepage;
