function Search({ games }) {
  const titles = games.titles;
  const paths = games.paths;
  return (
    <div className="search">
      {titles.filer((title) => (
        <GameCard key={title} game={game} />
      ))}
    </div>
  );
}

export default Search;
