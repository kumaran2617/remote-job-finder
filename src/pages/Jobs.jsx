import { useMemo, useState } from "react";
import JobCard from "../components/JobCard";
import SearchBar from "../components/SearchBar";
import { useJobs } from "../context/JobsContext";
import "./pages.css";

export default function Jobs() {
  const { jobs } = useJobs();
  const [query, setQuery] = useState("");

  const filteredJobs = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return jobs.filter((job) => {
      if (!normalizedQuery) return true;
      return [job.title, job.company, job.location, job.type, ...(job.skills || [])]
        .join(" ")
        .toLowerCase()
        .includes(normalizedQuery);
    });
  }, [jobs, query]);

  return (
    <main className="page">
      <header className="hero">
        <h1>Browse All Jobs</h1>
        <p>Find the role that matches your skills and preferred location.</p>
        <SearchBar value={query} onChange={setQuery} />
      </header>

      <div className="results">
        {filteredJobs.length ? (
          filteredJobs.map((job) => <JobCard job={job} key={job.id} />)
        ) : (
          <div className="empty-state">
            <h3>No matching jobs</h3>
            <p>Update your search keyword to see more opportunities.</p>
          </div>
        )}
      </div>
    </main>
  );
}
