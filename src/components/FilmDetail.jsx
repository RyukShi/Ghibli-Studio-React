import { useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import DataContext from '../context/DataContext'

const FilmDetail = () => {
  const { id } = useParams()
  const { films } = useContext(DataContext)
  const [film, setFilm] = useState(null)

  useEffect(() => {
    const selectedFilm = films.find(f => f.id === id)
    if (selectedFilm !== undefined) setFilm(selectedFilm)
  }, [films, id])

  if (!film) {
    return (
      <div>
        <h1>Film not found :(</h1>
      </div>
    )
  }

  return (
    <div className="film-detail">
      <img src={film.movie_banner} alt={`${film.title} movie banner`} />
      <h1>{`${film.title} (${film.release_date})`}</h1>
      <p style={{textAlign: 'justify'}}>{film.description}</p>
    </div>
  )
}

export default FilmDetail
