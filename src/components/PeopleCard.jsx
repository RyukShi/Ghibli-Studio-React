const PeopleCard = ({ person }) => {
  return (
    <div className="people-card">
      <h3>{person.name}</h3>
      <p>Gender: {person.gender}</p>
      {(person.age) && (
        <p>{person.age}</p>
      )}
    </div>
  )
}

export default PeopleCard
