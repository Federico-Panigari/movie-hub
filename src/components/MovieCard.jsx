function MovieCard({ title, year, poster, genre, watched }) {

  return (
    <article className="movie-card">
     
      <img className="movie-image"
        src={poster} alt="poster"
      />

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

        <p className="movie-flag">
          {watched ? "visto" : "non visto"}
        </p>  
      </div>

    </article>
  )
}

export default MovieCard