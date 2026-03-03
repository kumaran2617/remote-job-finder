import { useEffect, useState } from 'react'

export default function DarkModeToggle(){
  const [on, setOn] = useState(false)
  useEffect(()=>{
    document.documentElement.style.background = on? '#0f1720' : ''
    document.documentElement.style.color = on? '#e6eef6' : ''
  },[on])
  return (
    <button className="dark-toggle" onClick={()=>setOn(v=>!v)}>{on? '☾' : '☼'}</button>
  )
}
