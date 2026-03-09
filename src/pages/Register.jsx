import './pages.css'

export default function Register(){
  return (
    <main style={{padding:'clamp(1rem,4vw,2rem)',maxWidth:'500px',margin:'clamp(1rem,6vh,4rem) auto'}}>
      <h2>Create account</h2>
      <form className="auth">
        <input placeholder="Name" />
        <input placeholder="Email" />
        <input placeholder="Password" type="password" />
        <button>Create</button>
      </form>
    </main>
  )
}
