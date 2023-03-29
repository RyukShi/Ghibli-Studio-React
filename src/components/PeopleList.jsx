import { useEffect, useState } from 'react'
import PeopleCard from './PeopleCard'

const PeopleList = ({ people }) => {
  const [loading, setLoading] = useState(false)
  const [peopleList, setPeopleList] = useState([])

  const fetchPeople = async () => {
    let segments = people[0].split("/")
    let lastSegment = segments[segments.length - 1]
    if (lastSegment) {
      try {
        setLoading(true)
        const promises = people.map(async (url) => await fetch(url))
        const responses = await Promise.all(promises)
        const jsonResponses = await Promise.all(responses.map(r => r.json()))
        if (jsonResponses) setPeopleList(jsonResponses)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
  }

  useEffect(() => {
    fetchPeople()
  }, [people])

  const showPeople = peopleList
    .map(p => <PeopleCard key={p.id} person={p} />)

  return (
    <div>
      <h2>Characters details</h2>
      {(loading) && (
        <p>Loading...</p>
      )}
      {(!loading && peopleList.length > 0) && (
        <div className="people-grid">
          {showPeople}
        </div>
      )}
      {(!loading && peopleList.length === 0) && (
        <p>Characters details are currently not available.</p>
      )}
    </div>
  )
}

export default PeopleList
