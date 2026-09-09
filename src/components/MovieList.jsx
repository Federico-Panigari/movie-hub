import MovieCard from "./MovieCard";


function MovieList({ list, toggleFavorite }) {

  return (
    <div style={{display:"flex"}}>
      {list.map((el) => (
         <MovieCard key={el.id} {...el} toggleFavorite={toggleFavorite}/>
      ))}
    </div>
  )
}

export default MovieList