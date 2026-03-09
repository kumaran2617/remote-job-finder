import { useJobs } from '../context/JobsContext'

export default function SaveButton({jobId}){
  const { isSaved, toggleSaved } = useJobs()
  const saved = isSaved(jobId)

  return (
    <button
      type="button"
      className={`save-btn ${saved ? 'saved' : ''}`}
      onClick={() => toggleSaved(jobId)}
      aria-pressed={saved}
    >
      {saved? 'Saved' : 'Save'}
    </button>
  )
}
