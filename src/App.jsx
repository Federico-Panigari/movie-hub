import { useState } from 'react'

import MovieList from './components/MovieList'
import Container from './components/Container'

import { movies } from './data/movies'


function App() {

  return (
    <div>
      <Container>
        <MovieList list={movies}/> 
      </Container>
    </div>
  )
}

export default App
