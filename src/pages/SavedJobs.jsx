import JobCard from '../components/JobCard'

export default function SavedJobs(){
  const saved = [{id:1,title:'Saved Role',company:'Acme',type:'Full-time',location:'Remote',excerpt:'Saved job example.'}]
  return (
    <main className="page">
      <header className="hero">
        <h1>My Saved Jobs</h1>
      </header>
      <div className="results">
        {saved.map(j=> <JobCard job={j} key={j.id} />)}
      </div>
    </main>
  )
}
