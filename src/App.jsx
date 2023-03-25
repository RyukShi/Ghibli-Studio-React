import { useContext } from 'react'
import './App.css'
import DataContext from './context/DataContext'

function App() {
  const { loading, films } = useContext(DataContext)
  return (
    <div className="App">
      {(loading) && (
        <h1>Loading...</h1>
      )}

      {(films.length > 0) && (
        films.map(film => {
          console.log(film)
          return (
            <h1 key={film.id}>{film.original_title}</h1>
          )
        })
      )}
    </div>
  )
}

export default App
