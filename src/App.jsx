import { useState } from 'react'

import MovieCard from './components/MovieCard'
import Container from './components/Container'


function App() {

  return (
    <div>
      <Container>
        <MovieCard 
          id="1"  
          title="a scuola con manaz" 
          year="2006" 
          poster="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgO6Po8DJJoa65t9HhFgSXRaYh3G57gMWEe3MS0lIgPXwdQV4xfexw6RKPETJPPBCKzQZIFg_RMFgXidBkRxQj_u51xSgWrn9LbggNHFToh-aN0IKeYYLrAxnVSrBng3ijGQuFaWFotevGA/s1600/la-scimmia-studenti-maturita.jpg"
          genre="commedia"
          watched="true"   
        />
        <MovieCard 
          id="2"
          title="la battaglia di masante" 
          year="1998" 
          poster="https://thumbs.dreamstime.com/b/ippopotamo-che-lotta-8342035.jpg"
          genre="guerra"
          watched="false"
        /> 
        <MovieCard 
          id="3"  
          title="l'idea di baba" 
          year="2026" 
          poster="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2ohtx0SJPUiY7naKnsBvId_L8b0njTZLZzLWPCEkdWQ&s=10"
          genre="guerra"
          watched="false"
        />
        <MovieCard 
          id="4"
          title="Masante VS Palitto" 
          year="1914" 
          poster="https://www.scienzenotizie.it/wp-content/uploads/2024/09/hippo-vs-lion-m-1.png"
          genre="tragedia"
          wathced="true"
        />
      </Container>
    </div>
  )
}

export default App
