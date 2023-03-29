import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div>
      <h1>404 Not Found</h1>
      <p>The page you're looking for doesn't exist. Click 
        on this <Link to="/">Link</Link> to return 
        to the safe and cozy home.</p>
    </div>
  )
}

export default NotFound
