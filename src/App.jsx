import './App.css'
import { Routes, Route } from 'react-router-dom'
import FilmsList from './components/FilmsList'
import FilmDetail from './components/FilmDetail'
import NotFound from './components/NotFound'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index element={<FilmsList />} />
          <Route path=":id" element={<FilmDetail />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
