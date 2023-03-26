import { useState } from 'react'

const FilmCard = ({ film }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="film-card"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
      <img src={film.image} alt={`${film.title} film poster`} />
      {(isHovered) && (
        <div className="film-card-info">
          <h1 className="film-card-main-title">{film.original_title}</h1>
          <h2 className="film-card-subtitle">{film.title}</h2>
          <p style={{fontSize: 20}}>{`Released in ${film.release_date}`}</p>
        </div>
      )}
    </div>
  )
}

export default FilmCard
