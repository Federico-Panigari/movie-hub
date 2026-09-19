import styles from './MovieCard.module.css'


function MovieCard({ ...props }) {
  const { id, title, poster, genre, year, watched, favorite, ontoggleFav } = props;
  
  return (
    <article className={styles.card}>
     
      <img className={styles.image}
        src={poster} alt="poster"
      />

      <div className={styles.flag}>
        {watched ? "visto" : "non visto"}
      </div>

      <button className={styles.favorite} onClick={() => ontoggleFav(id)}>
        {favorite ? "★" : "☆"}
      </button>

      <div className={styles.data}>
        <h3 className={styles.title}>
          {title}
        </h3>

        <p className={styles.year}>
          {year}
        </p>

        <p className={styles.genre}>
          {genre}
        </p>
      </div>
        
    </article>
  )
}

export default MovieCard