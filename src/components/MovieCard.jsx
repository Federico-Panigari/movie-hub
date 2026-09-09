function MovieCard({ ...props }) {
  const { id, title, poster, genre, year, watched, favorite, toggleFavorite } = props;
  
  return (
    <article className="movie-card">
     
      <img className="movie-image"
        src={poster} alt="poster"
      />

      <div className="movie-flag">
        {watched ? "visto" : "non visto"}
      </div>

      <button className="movie-favorite" onClick={() => toggleFavorite(id)}>
        {favorite ? "★" : "☆"}
      </button>

      <div className="movie-data">
        <h3 className="movie-title">
          {title}
        </h3>

        <p className="movie-year">
          {year}
        </p>

        <p className="movie-genre">
          {genre}
        </p>
      </div>
        
    </article>
  )
}

export default MovieCard