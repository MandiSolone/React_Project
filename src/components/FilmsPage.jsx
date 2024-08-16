import { useState, useEffect } from "react";
import {
  filterFilmsByDirector,
  getListOf,
  getFilmStats,
} from "../helpers/filmHelpers";
import { Link } from "react-router-dom";

export function FilmsPage() {
  const [movieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchDirector, setSearchDirector] = useState("");

  useEffect(() => {
    fetch(`https://studioghibliapi-d6fc8.web.app/films`)
      .then((response) => response.json())
      .then((data) => {
        setMovieData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data", err);
        setLoading(false); // Update the loading state
      });
  }, []);

  if (loading) {
    return <div>Loading Users...</div>;
  }
  console.log("movieData before return", movieData);

  let filmsByDirector = filterFilmsByDirector(movieData, searchDirector); //movieData or list?
  let directors = getListOf(movieData, "director");
  let { avg_score, latest, total } = getFilmStats(filmsByDirector);

  return (
    <>
      <h1>Various Studio Ghibli Movies</h1>
      <form>
        <label htmlFor="searchDirector">Filter By Director: </label>
        <select
          name="searchDirector"
          id="searchDirector"
          value={searchDirector}
          onChange={(e) => setSearchDirector(e.target.value)}
        >
          <option value="">All Directors</option>
          {directors.map((director, idx) => {
            return (
              <option key={director + idx} value={director}>
                {director}
              </option>
            );
          })}
        </select>
      </form>
      <div>
        <div>
          <span>Total # Of Films: </span>
          <span>{total}</span>
        </div>
        <div>
          <span>Average Rating: </span>
          <span>{avg_score.toFixed(2)}</span>
        </div>
        <div>
          <span>Latest Film: </span>
          <span>{latest}</span>
        </div>
      </div>
      <ul className="ghibliMovies">
        {filmsByDirector.map((film) => {
          return (
            <li className="filmLi" key={film.id}>
              <Link to={`/films/${film.id}`}> {film.title}</Link>
              <br></br>
              {"Directed By: " + film.director}
              <br></br>
              {"Rotten Tomatoes Rating: " + film.rt_score}
            </li>
          );
        })}
      </ul>
    </>
  );
}
