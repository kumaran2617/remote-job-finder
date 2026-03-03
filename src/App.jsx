import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Jobs from './pages/Jobs'
import JobDetails from './pages/JobDetails'
import SavedJobs from './pages/SavedJobs'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Register from './pages/Register'
import NotFound from './pages/NotFound'

function App(){
  return (
    <BrowserRouter>
      <div className="app-root">
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/jobs" element={<Jobs/>} />
            <Route path="/jobs/:id" element={<JobDetails/>} />
            <Route path="/saved" element={<SavedJobs/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
