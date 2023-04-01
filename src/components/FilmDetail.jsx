import { useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import DataContext from '../context/DataContext'
import PeopleList from './PeopleList'
import { Link } from 'react-router-dom'

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
      <Link to="/" className="fixed-link">Back to home</Link>
      <img src={film.movie_banner} alt={`${film.title} movie banner`} />
      <h1>{`${film.title} (${film.release_date})`}</h1>
      <h3>Original Japanese title : {film.original_title} ({film.original_title_romanised})</h3>
      <h3>Duration : {film.running_time} minutes</h3>
      <h2 style={{ textAlign: 'left' }}>Synopsis</h2>
      <p style={{ textAlign: 'justify' }}>{film.description}</p>
      <h2 style={{ textAlign: 'left' }}>Production Team</h2>
      <p style={{ textAlign: 'justify' }}>
        This movie was directed by <strong>{film.director}</strong>, and produced by <strong>{film.producer}</strong>
      </p>
      {<PeopleList people={film.people} />}
    </div>
  )
}

export default FilmDetail
