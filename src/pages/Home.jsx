import JobCard from '../components/JobCard'
import SearchBar from '../components/SearchBar'
import FilterSidebar from '../components/FilterSidebar'
import './pages.css'

const demoJobs = [
  {id:1,title:'Frontend Engineer',company:'Acme',type:'Full-time',location:'Worldwide',excerpt:'Build delightful web apps.'},
  {id:2,title:'Backend Engineer',company:'Beta',type:'Part-time',location:'USA',excerpt:'Design robust APIs.'}
]

export default function Home(){
  return (
    <main className="page">
      <header className="hero">
        <h1>Find Remote Jobs — Work from anywhere</h1>
        <SearchBar />
      </header>
      <section className="layout">
        <FilterSidebar>
          <label>Type</label>
          <select>
            <option>All</option>
            <option>Full-time</option>
            <option>Part-time</option>
            <option>Contract</option>
          </select>
        </FilterSidebar>
        <div className="results">
          {demoJobs.map(job=> <JobCard key={job.id} job={job} />)}
        </div>
      </section>
    </main>
  )
}
