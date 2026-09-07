function MovieCard({ id, title, year, poster, genre, watched }) {

  return (
    <article className="movie-card">
      <h3>{title}</h3>
      <p>{year}</p>
      <img src={poster} alt="poster"></img>
      <p>{genre}</p>
      <p>{watched ? "visto" : "non visto"}</p>
   </article>
  )
}

export default MovieCard