
export function MovieCard({id,title,year,poster,genre,watched}){
    return(
        <article className="movie-card">
            <h3>{title}</h3>
            <p>{year}</p>
            <img src={poster} alt="poster"></img>
            <p>{genre}</p>
            <p>visto? {watched}</p>

        </article>
    )

}