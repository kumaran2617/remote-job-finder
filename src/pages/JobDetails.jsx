import { useParams } from 'react-router-dom'
import SaveButton from '../components/SaveButton'

export default function JobDetails(){
  const {id} = useParams()
  return (
    <main style={{padding:'2rem'}}>
      <h2>Job Details — {id}</h2>
      <p>Full job description goes here. This is a placeholder detail page.</p>
      <SaveButton jobId={id} />
    </main>
  )
}
