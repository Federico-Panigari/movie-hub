import { useEffect, useRef } from 'react'
import styles from './SearchBar.module.css'


function SearchBar({ searchTerm, onSearch }) {

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <input className={styles.searchbar}
      type="text" 
      ref={inputRef}
      value={searchTerm} 
      onChange={(e) => onSearch(e.target.value)}
      placeholder='Cerca film ...'
    />
  )
}

export default  SearchBar