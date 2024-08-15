import { useState } from "react"; 

export default function HomePage() {
  
    const [movieTitleEntered, setMovieTitleEntered] = useState(""); 
    const [movieList, setMovieList] = useState([]); 
   
    return ( 
    <div>
      <h1>Movie Watchlist</h1>
      <form action="/submit-form" onSubmit={(event) => {
        event.preventDefault();
        setMovieList([...movieList, movieTitleEntered]);
        setMovieTitleEntered('');
      }} >
        <label htmlFor="movie-want-to-watch">Movie(s) to watch: </label>
        <input
          type="text"
          id="movie-name"
          name="movie-name"
          value = {movieTitleEntered}
          onChange={(event) => setMovieTitleEntered(event.target.value)}
        />
        <button className="submit" type="button">
          Add To List
        </button>
      </form>


      <ul className="wishList">
        <li>It Ends With Us</li>
        <li>Despicable Me 4</li>
        <li>Twister</li>
        {movieList.map((ul, movieList) => (
          <li key ={movieList}>{ul}</li>))}
      </ul>
    </div>
  );
}
