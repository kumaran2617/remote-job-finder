import { Link, useParams } from "react-router-dom";
import SaveButton from "../components/SaveButton";
import { useJobs } from "../context/JobsContext";
import "./pages.css";

export default function JobDetails() {
  const { id } = useParams();
  const { getJobById } = useJobs();
  const job = getJobById(id);

  if (!job) {
    return (
      <main className="page">
        <div className="empty-state">
          <h3>Job not found</h3>
          <p>The selected job does not exist.</p>
          <Link to="/jobs" className="details-link">
            Back to Jobs
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="page">
      <header className="hero">
        <h1>{job.title}</h1>
        <p>
          {job.company} | {job.location} | {job.type}
        </p>
      </header>

      <section className="profile-card">
        <p>
          <strong>Salary:</strong> {job.salary}
        </p>
        <p>
          <strong>Posted:</strong> {job.postedAt}
        </p>
        <p>{job.excerpt}</p>
        <div className="job-tags">
          {job.skills.map((skill) => (
            <span key={skill} className="job-tag">
              {skill}
            </span>
          ))}
        </div>
        <div className="job-detail-actions">
          <SaveButton jobId={job.id} />
          <Link to="/jobs" className="details-link">
            Browse More Jobs
          </Link>
        </div>
      </section>
    </main>
  );
}
