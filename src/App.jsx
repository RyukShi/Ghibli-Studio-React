import { useContext, useState } from 'react'
import './App.css'
import DataContext from './context/DataContext'
import FilmCard from './components/FilmCard'

function App() {
  const { loading, films } = useContext(DataContext)
  const [search, setSearch] = useState("")

  const handleChange = (e) => {
    setSearch(e.target.value.toLowerCase())
  }

  const showFilms = films.filter(film =>
    film.title.toLowerCase().includes(search) ||
    film.original_title.toLowerCase().includes(search)
  ).map(film => <FilmCard key={film.id} film={film} />)

  return (
    <div className="App">
      {(loading) && (
        <img src="../src/assets/images/ghibli_studio.jpg" alt="ghibli studio image" />
      )}

      {(films.length > 0) && (
        <div>
          <input type="text" onChange={handleChange}
            placeholder="Enter title or original title" />
          <div className="film-grid">
            {showFilms}
          </div>
        </div>
      )}
    </div>
  )
}

export default App
