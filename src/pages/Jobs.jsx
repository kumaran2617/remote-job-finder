import JobCard from '../components/JobCard'

export default function Jobs(){
  const jobs = [
    {id:1,title:'Frontend Engineer',company:'TechCorp',type:'Full-time',location:'Remote',excerpt:'Build beautiful and responsive user interfaces with React, TypeScript, and modern CSS.'},
    {id:2,title:'Backend Developer',company:'CloudSys',type:'Full-time',location:'Remote',excerpt:'Develop scalable APIs and microservices using Node.js and PostgreSQL.'},
    {id:3,title:'Full Stack Developer',company:'StartupXYZ',type:'Contract',location:'Remote',excerpt:'End-to-end development of web applications with modern tech stack.'},
    {id:4,title:'UI/UX Designer',company:'DesignHub',type:'Part-time',location:'Remote',excerpt:'Create stunning user experiences and design systems for our products.'},
    {id:5,title:'DevOps Engineer',company:'InfraCloud',type:'Full-time',location:'Remote',excerpt:'Manage infrastructure, CI/CD pipelines, and cloud deployments.'},
    {id:6,title:'Data Analyst',company:'DataDriven',type:'Full-time',location:'Remote',excerpt:'Transform data into actionable insights using Python and analytics tools.'},
  ]
  
  return (
    <main className="page">
      <header className="hero">
        <h1>Browse All Jobs</h1>
        <p>Discover amazing opportunities to grow your career</p>
      </header>
      <div className="results">
        {jobs.map(j=> <JobCard job={j} key={j.id} />)}
      </div>
    </main>
  )
}
