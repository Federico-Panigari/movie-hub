import { useState } from 'react'

import MovieList from './components/MovieList'
import Container from './components/Container'

import { movies } from './data/movies'


function App() {

  const [films, setFilms] = useState(movies)

  function newFavorite(e) {
    setFilms((prev) => prev.map(el => 
      {if (e === el.id) {
        return { ...el, favorite : !el.favorite }
      }
      else {
        return el
      }
    }))
  }

  return (
    <div>
      <Container>
        <MovieList list={films} toggleFavorite={newFavorite}/> 
      </Container>
    </div>
  )
}

export default App
