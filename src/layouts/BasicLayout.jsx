import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import styles from './BasicLayout.module.css'


function BasicLayout() {
  return (
    <div className={styles.layout}>
      <nav className={styles.navbar}>
        <Navbar /> 
      </nav>
      <main className={styles.content}>
        <Outlet />  
      </main>
    </div>
  )
}

export default BasicLayout