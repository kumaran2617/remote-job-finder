export default function Profile(){
  // pretend this data comes from auth context or an API
  const user = {
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    role: 'Frontend Engineer',
    location: 'Worldwide',
  };

  return (
    <main className="page">
      <header className="hero">
        <h1>Your Profile</h1>
      </header>
      <section className="profile-card">
        <h2>{user.name}</h2>
        <p><strong>Role:</strong> {user.role}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Location:</strong> {user.location}</p>
      </section>
    </main>
  )
}
