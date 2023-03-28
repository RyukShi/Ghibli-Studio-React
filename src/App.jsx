import { useContext, useState } from 'react'
import './App.css'
import DataContext from './context/DataContext'
import FilmCard from './components/FilmCard'

function App() {
  const { loading, films } = useContext(DataContext)
  const [search, setSearch] = useState("")
  const [director, setDirector] = useState("")

  const handleChangeSearch = (e) => {
    setSearch(e.target.value.toLowerCase())
  }

  const handleChangeDirector = (e) => {
    setDirector(e.target.value)
  }

  const showFilms = films
    .filter(film =>
      (search ?
        (film.title.toLowerCase().includes(search) || film.original_title.toLowerCase().includes(search))
        : true) &&
      (director ? film.director === director : true))
    .map(film => <FilmCard key={film.id} film={film} />)

  /* Extract unique director from films array and create options */
  const DIRECTORS_OPTIONS = Array.from(new Set(films.map(f => f.director)))
    .map(d => <option key={d} value={d}>{d}</option>)

  const filterDivCSS = {
    display: 'flex',
    justifyContent: 'center',
    columnGap: 30,
    alignItems: 'center',
    width: '100%',
    margin: '40px 0 40px 0'
  }

  return (
    <div className="App">
      {(loading) && (
        <img src="../src/assets/images/ghibli_studio.jpg" alt="ghibli studio image" />
      )}

      {(films.length > 0) && (
        <div>
          <div style={filterDivCSS}>
            <input type="text" onChange={handleChangeSearch}
              placeholder="Enter title or original title" />
            <select
              value={director}
              onChange={handleChangeDirector}>
              <option value="">Choose director to filter</option>
              {DIRECTORS_OPTIONS}
            </select>
          </div>
          <div className="film-grid">
            {showFilms}
          </div>
        </div>
      )}
    </div>
  )
}

export default App
