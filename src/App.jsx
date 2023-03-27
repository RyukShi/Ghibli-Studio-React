import { useContext } from 'react'
import './App.css'
import DataContext from './context/DataContext'
import FilmCard from './components/FilmCard'

function App() {
  const { loading, films } = useContext(DataContext)

  const showFilms = films.map(film =>
    <FilmCard key={film.id} film={film} />
  )
  return (
    <div className="App">
      {(loading) && (
        <img src="../src/assets/images/ghibli_studio.jpg" alt="ghibli studio image" />
      )}

      {(films.length > 0) && (
        <div className="film-grid">
          {showFilms}
        </div>
      )}
    </div>
  )
}

export default App
