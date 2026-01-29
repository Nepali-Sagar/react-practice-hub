import "../style/movieCards.css";

function MovieCards({movie}) {
  return (
    <div className="movieCard">
      <div className="movie-poster">
        <img src={movie.poster} alt="" />
      </div>
      <div className="movie-content">
        <div className="movie-details">
          <p className="movie-title">{movie.title}</p>
          <p className="movie-genre">{movie.genre}</p>
        </div>
        <button className="like-btn">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
              d="M15 8C8.925 8 4 12.925 4 19c0 11 13 21 20 23.326C31 40 44 30 44 19c0-6.075-4.925-11-11-11c-3.72 0-7.01 1.847-9 4.674A10.987 10.987 0 0 0 15 8Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default MovieCards;
