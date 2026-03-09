import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './pages.css'

export default function Login(){
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Basic validation
    if(email && password) {
      navigate('/home')
    }
  }

  return (
    <main style={{padding:'clamp(1rem,4vw,2rem)',maxWidth:'500px',margin:'clamp(1rem,6vh,4rem) auto',textAlign:'center'}}>
      <h2>Sign in to RemoteJobs</h2>
      <p style={{color:'#666',marginBottom:'1.5rem'}}>Find your next remote opportunity</p>
      <form className="auth" onSubmit={handleSubmit}>
        <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required />
        <input placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} required />
        <button style={{background:'#0ea5a4',color:'#fff',padding:'0.6rem',borderRadius:'8px',border:'none',cursor:'pointer'}}>Sign in</button>
      </form>
      <p style={{marginTop:'1rem',color:'#666'}}>
        Don't have an account? <Link to="/register" style={{color:'#0ea5a4',textDecoration:'none'}}>Create one</Link>
      </p>
    </main>
  )
}
