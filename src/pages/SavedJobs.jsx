import JobCard from '../components/JobCard'

export default function SavedJobs(){
  const saved = [{id:1,title:'Frontend Engineer',company:'Acme',type:'Full-time',location:'Remote',excerpt:'Join our team to build amazing user experiences with React and modern web technologies.'}]
  
  return (
    <main className="page">
      <header className="hero">
        <h1>My Saved Jobs</h1>
        <p>Your collection of favorite opportunities</p>
      </header>
      
      {saved.length > 0 ? (
        <div className="results">
          {saved.map(j=> <JobCard job={j} key={j.id} />)}
        </div>
      ) : (
        <div style={{textAlign: 'center', padding: '3rem 2rem', background: 'linear-gradient(135deg,#667eea15 0%,#764ba215 100%)', borderRadius: '16px', border: '2px dashed #667eea'}}>
          <h2 style={{color: '#1a202c', margin: '0 0 0.5rem'}}>No Saved Jobs Yet</h2>
          <p style={{color: '#718096', margin: '0'}}>Start exploring jobs and save the ones you like!</p>
        </div>
      )}
    </main>
  )
}
