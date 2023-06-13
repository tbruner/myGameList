import "./Homepage.css";

function Homepage() {
  return (
    <>
      <section className="home-section hero">
        <h1>Welcome to MyGameList</h1>
        Login or join today and...
        <ul>
          <li>Use completion times to help you conquer your gaming backlog</li>
          <li>Share your Game List with friends and show off your favorites</li>
          <li>
            Check out game ratings and discover new games to add to your
            collection
          </li>
          <li>Discuss your favorite games in the fourm</li>
        </ul>
      </section>
      <section class="home-section trending-games">
        <h2>Trending Games</h2>
      </section>
    </>
  );
}

export default Homepage;
