import JobCard from '../components/JobCard'

export default function Jobs(){
  const jobs = new Array(6).fill(0).map((_,i)=>({id:i+1,title:`Role ${i+1}`,company:'Company',type:'Remote',location:'Global',excerpt:'Short description of role.'}))
  return (
    <main className="page">
      <header className="hero">
        <h1>Browse All Jobs</h1>
      </header>
      <div className="results">
        {jobs.map(j=> <JobCard job={j} key={j.id} />)}
      </div>
    </main>
  )
}
