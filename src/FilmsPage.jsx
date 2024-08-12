import { useState, useEffect } from "react";

export function FilmsPage (){
    const [movieData, setMovieData] = useState([]); 
    const [loading, setLoading] = useState(true);

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

    return (
    <>  
    <h1>Various Studio Ghibli Movies</h1>
    <ul className="ghibliMovies"> {movieData.map((x) => (
        ( <li className="filmLi" key ={x.id}>
            <b>{x.title}</b> <br></br>
            {"Directed By: " + x.director} <br></br>
            {"Rotten Tomatoes Rating: " + x.rt_score}
        </li>)
    ))}
    </ul>
    </>  
    );
}