export default function Register(){
  return (
    <main style={{padding:'2rem'}}>
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
