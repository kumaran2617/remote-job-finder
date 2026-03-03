import { useState } from 'react'

export default function SaveButton({jobId}){
  const [saved, setSaved] = useState(false)
  return (
    <button className={`save-btn ${saved? 'saved':''}`} onClick={()=>setSaved(s=>!s)} aria-pressed={saved}>
      {saved? 'Saved' : 'Save'}
    </button>
  )
}
