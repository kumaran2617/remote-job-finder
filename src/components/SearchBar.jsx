export default function SearchBar({value,onChange,onSubmit}){
  return (
    <form className="searchbar" onSubmit={(e)=>{e.preventDefault(); onSubmit && onSubmit()}}>
      <input aria-label="Search jobs" placeholder="Search roles, companies, or skills" value={value} onChange={e=>onChange && onChange(e.target.value)} />
      <button type="submit">Search</button>
    </form>
  )
}
