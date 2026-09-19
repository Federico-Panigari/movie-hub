import MovieCard from '../../cards/moviecard/MovieCard';


function MovieList({ list, ontoggleFav }) {

  return (
    <div style={{display:"flex"}}>
      {list.map((el) => (
         <MovieCard key={el.id} {...el} ontoggleFav={ontoggleFav}/>
      ))}
    </div>
  )
}

export default MovieList