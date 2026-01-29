import Header from "../component/Header";
import MovieCards from "../component/MovieCards";
import { useState } from "react";
import "../style/home.css";

function Home() {

    const [searchQuery, setSearchQuery] = useState('')

  const movies = [
    { id: 1, title: "Casino Royale", genre: "action", poster: ('casino_royale.jpg') },
    { id: 2, title: "Ride Along", genre: "comedy", poster: ('ride_along.webp') },
    { id: 3, title: "It", genre: "Horror", poster: ('it.jpg') },
  ];

  const searchMovie = () => {
    alert(searchQuery)
  }


  return (
    <>
      <Header></Header>
      <div className="movie-search">
        <p className="intro-text">Enjoy Movies</p>
        <div className="search-input">
          <input type="text" placeholder="Movie Name" value={searchQuery} onChange={
            (e) => setSearchQuery(e.target.value)
          }/>
          <button onClick={searchMovie}>Search</button>
        </div>
      </div>

      <div className="movies-grid">
        {movies.map((movie) => movie.title.toLowerCase().startsWith(searchQuery) &&
        <MovieCards movie = {movie} key={movie.id}/>
        )}
      </div>
    </>
  );
}

export default Home;
