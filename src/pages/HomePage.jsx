import { useState } from 'react'

import Container from '../components/container/Container'
import MovieList from '../components/lists/movielist/MovieList'
import SearchBar from '../components/searchbar/SearchBar'

import { allMovies } from '../data/movies'


function HomePage() {

  const [movies, setMovies] = useState(allMovies)
  const [title, setTitle] = useState('')

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(title.toLowerCase())
  )

  const favoriteCount = movies.filter((movie) => movie.favorite).length

  function toggleFavorite(id) {
    setMovies((prevMovies) =>
      prevMovies.map((movie) => {
        if (movie.id === id) {
          return {...movie, favorite: !movie.favorite}
        } 
        else {
          return movie
        }
      })
    )
  }

  return (
    <div>
      <SearchBar 
        searchTerm={title} 
        onSearch={setTitle} 
      />
      <div className="favorite-counter">
        {favoriteCount} ⭐
      </div>
      <Container>
        <MovieList list={filteredMovies} ontoggleFav={toggleFavorite}/>   
      </Container>
    </div>
  )
}

export default HomePage
