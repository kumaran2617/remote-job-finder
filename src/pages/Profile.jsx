export default function Profile() {
  const user = {
    name: "Jane Doe",
    email: "jane.doe@example.com",
    role: "Frontend Engineer",
    location: "Worldwide",
    joinDate: "Jan 2024",
    savedJobs: 12,
    appliedJobs: 8,
  };

  return (
    <main className="page">
      <header className="hero">
        <h1>Your Profile</h1>
        <p>Manage your professional information</p>
      </header>

      <section className="profile-card">
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          <div
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              background: "linear-gradient(135deg,#667eea 0%,#764ba2 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: "2rem",
              fontWeight: "bold",
            }}
          >
            {user.name[0]}
            {user.name.split(" ")[1]?.[0]}
          </div>
          <div>
            <h2 style={{ margin: 0, color: "#1a202c" }}>{user.name}</h2>
            <p style={{ margin: "0.25rem 0", color: "#667eea", fontWeight: "600" }}>{user.role}</p>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "1rem",
            marginBottom: "2rem",
          }}
        >
          <div
            style={{
              background: "linear-gradient(135deg,#667eea15 0%,#764ba215 100%)",
              padding: "1rem",
              borderRadius: "12px",
              textAlign: "center",
              border: "1px solid #667eea30",
            }}
          >
            <p style={{ margin: 0, color: "#667eea", fontSize: "1.8rem", fontWeight: "bold" }}>{user.savedJobs}</p>
            <p style={{ margin: "0.5rem 0 0", color: "#718096", fontSize: "0.9rem" }}>Saved Jobs</p>
          </div>
          <div
            style={{
              background: "linear-gradient(135deg,#764ba215 0%,#6366f115 100%)",
              padding: "1rem",
              borderRadius: "12px",
              textAlign: "center",
              border: "1px solid #764ba230",
            }}
          >
            <p style={{ margin: 0, color: "#764ba2", fontSize: "1.8rem", fontWeight: "bold" }}>{user.appliedJobs}</p>
            <p style={{ margin: "0.5rem 0 0", color: "#718096", fontSize: "0.9rem" }}>Applied Jobs</p>
          </div>
        </div>

        <div style={{ borderTop: "1px solid #e2e8f0", paddingTop: "1.5rem" }}>
          <h3 style={{ color: "#1a202c", margin: "0 0 1rem", fontSize: "1.1rem" }}>Contact Information</h3>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Location:</strong> {user.location}
          </p>
          <p>
            <strong>Member Since:</strong> {user.joinDate}
          </p>
        </div>
      </section>
    </main>
  );
}
