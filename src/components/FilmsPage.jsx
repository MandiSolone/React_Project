import { useState, useEffect } from "react";
import { filterFilmsByDirector, getListOf } from "../helpers/filmHelpers";

export function FilmsPage (){
    const [movieData, setMovieData] = useState([]); 
    const [loading, setLoading] = useState(true);
    const [searchDirector, setSearchDirector] = useState(""); 

    useEffect(()=> {
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
    console.log("movieData before return",movieData);  

    let filmsByDirector = filterFilmsByDirector(movieData, searchDirector); //movieData or list?
    let directors = getListOf(movieData, "director"); 

    return (
    <>  
        <h1>Various Studio Ghibli Movies</h1>
        <form >
            <label htmlFor="searchDirector">Filter By Director: </label>
            <select name="searchDirector" id="searchDirector" value={searchDirector} onChange={(e) => setSearchDirector(e.target.value)}>
                <option value="">All Directors</option>
                {directors.map((director, idx) => {
                    return (
                        <option key={director + idx} value={director}>
                            {director}
                        </option>
                    )
                }
            )}
            </select>
        </form>
        <ul className="ghibliMovies"> {filmsByDirector.map((x) => (
            (<li className="filmLi" key ={x.id}>
                <b>{x.title}</b> 
                <br></br>
                {"Directed By: " + x.director} 
                <br></br>
                {"Rotten Tomatoes Rating: " + x.rt_score}
            </li>)
            ))}
        </ul>
    </>  
    );
}