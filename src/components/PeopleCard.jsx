const PeopleCard = ({ person }) => {
  return (
    <div className="people-card">
      <h3>{person.name}</h3>
      <p>Gender: {person.gender}</p>
      <p>Age : {person.age}</p>
      <p>Eyes color: {(person.eye_color)}</p>
      <p>Hair color: {person.hair_color}</p>
    </div>
  )
}

export default PeopleCard
