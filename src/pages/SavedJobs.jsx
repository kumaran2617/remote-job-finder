import JobCard from "../components/JobCard";
import { useJobs } from "../context/JobsContext";
import "./pages.css";

export default function SavedJobs() {
  const { savedJobs } = useJobs();

  return (
    <main className="page">
      <header className="hero">
        <h1>My Saved Jobs</h1>
        <p>Your saved roles stay here so you can apply when ready.</p>
      </header>

      {savedJobs.length > 0 ? (
        <div className="results">
          {savedJobs.map((job) => (
            <JobCard job={job} key={job.id} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <h3>No Saved Jobs Yet</h3>
          <p>Start exploring jobs and save the roles you want to track.</p>
        </div>
      )}
    </main>
  );
}
