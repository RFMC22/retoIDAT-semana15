import './App.css'
import {Header, Pelicula} from './components'
import {peliculas} from './data/peliculas'

function App() {

  return (
    <main>
      <Header/>
      <section>
        {peliculas.map(pelicula => (
          <Pelicula
            key={pelicula.id}
            pelicula={pelicula}
          />
        ))}
      </section>
    </main>
  )
}

export default App
