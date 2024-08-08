export default function HomePage() {
  return (
    <div>
      <h1>Movie Watchlist</h1>
      <form action="/submit-form">
        <label htmlFor="movie-want-to-watch">Movie you would like to watch:</label>
        <input
          type="text"
          id="movie-name"
          name="movie-name"
        />
        <button className="submit" type="button">
          Add Movie to Watch List
        </button>
      </form>
      <ul>
        <li>It Ends With Us</li>
        <li>Despicable Me 4</li>
        <li>Twister</li>
      </ul>
    </div>
  );
}
