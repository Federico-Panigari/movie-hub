import MovieCard from "./MovieCard";


function MovieList({ list }) {

  return (
    <div style={{display:"flex"}}>
      {list.map((el) => (
         <MovieCard key={el.id} {...el} />
      ))}
    </div>
  )
}

export default MovieList