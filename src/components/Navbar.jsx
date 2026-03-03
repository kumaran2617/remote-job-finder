import { Link, useLocation } from 'react-router-dom'
import './navbar.css'

export default function Navbar() {
  const location = useLocation()
  
  // Hide navbar on login page
  if(location.pathname === '/') return null

  return (
    <nav className="nav">
      <div className="nav-left">
        <Link to="/home" className="brand">Remote<span>Jobs</span></Link>
      </div>
      <div className="nav-center">
        <Link to="/home">Home</Link>
        <Link to="/jobs">Jobs</Link>
        <Link to="/saved">Saved</Link>
        <Link to="/profile">Profile</Link>
      </div>
      <div className="nav-right">
        <Link to="/" className="btn">Logout</Link>
      </div>
    </nav>
  )
}
