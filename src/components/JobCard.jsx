import './jobcard.css'
import SaveButton from './SaveButton'

export default function JobCard({job}){
  const isFrontend = job.title?.toLowerCase().includes('frontend');
  const isBackend = job.title?.toLowerCase().includes('backend');
  const className = [
    'jobcard',
    isFrontend && 'frontend-job',
    isBackend && 'backend-job'
  ].filter(Boolean).join(' ');

  return (
    <article className={className}>
      <div className="jobcard-header">
        <div className="logo-placeholder">{job.company?.[0] || 'R'}</div>
        <div>
          <h3>{job.title}</h3>
          <p className="company">{job.company} • {job.type}</p>
        </div>
        <div className="job-actions">
          <SaveButton jobId={job.id} />
        </div>
      </div>
      <p className="job-location">{job.location} • Remote</p>
      <p className="job-excerpt">{job.excerpt}</p>
    </article>
  )
}
