import { useEffect, useRef } from "react"


function SearchBar({ searchTerm, onSearch }) {

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <input className="search-bar"
      type="text" 
      ref={inputRef}
      value={searchTerm} 
      onChange={(e) => onSearch(e.target.value)}
      placeholder='Cerca film ...'>
    </input>
  )
}

export default  SearchBar