import { useState, useEffect } from 'react'
import DataContext from '../context/DataContext'

const DataProvider = ({ children }) => {
  const [films, setFilms] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchData = async () => {
    try {
      setLoading(true)
      const response = await fetch(
        "https://ghibliapi-1-v8647363.deta.app/films",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          }
        }
      )
      const jsonData = await response.json()
      if (jsonData) setFilms(jsonData)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <DataContext.Provider value={{ films, loading }}>
      {children}
    </DataContext.Provider>
  )
}

export default DataProvider
