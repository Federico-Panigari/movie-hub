import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'


function Navbar () {

  const activeItem = ({ isActive }) => 
    `${styles.item} 
     ${isActive ? styles.active : ''}`


  return (
    <nav className={styles.navbar}>

      <div className={styles.title}>
       <img className={styles.logo} src='/logo.png' alt='logo' />
       <h3 className={styles.text}>FILMY</h3>
      </div>

      <ul className={styles.menu}>
        <li>
          <NavLink
            to='/'
            className={activeItem}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/favorite'
            className={activeItem}>
            Favorite
          </NavLink>
        </li>
      </ul>

    </nav>
  )
}

export default Navbar