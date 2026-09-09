function SearchBar({ searchTerm, onSearch }) {

  return (
    <input className="search-bar"
      type="text" 
      value={searchTerm} 
      onChange={(e) => onSearch(e.target.value)}
      placeholder='Cerca film ...'>
    </input>
  )
}

export default  SearchBar