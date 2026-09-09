import { useState } from 'react'

import Container from './components/Container'
import MovieList from './components/MovieList'
import SearchBar from './components/SearchBar'

import { allMovies } from './data/movies'


function App() {

  const [movies, setMovies] = useState(allMovies)
  const [title, setTitle] = useState('')

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(title.toLowerCase())
  )

  const favoriteCount = movies.filter((movie) => movie.favorite).length

  function addFavorite(id) {
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
        <MovieList list={filteredMovies} toggleFavorite={addFavorite}/>   
      </Container>
    </div>
  )
}

export default App
