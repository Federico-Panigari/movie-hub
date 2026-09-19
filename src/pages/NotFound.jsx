import { Link } from 'react-router-dom'
//import styles from './NotFound.module.css'


function NotFound() {

  return (
    <div className={""}>

      <div className={""}>
      
        <img className={""}
          src={sadAnimals} 
          alt="animali tristi"
        />
      
        <h1 className={""}>
          404
        </h1>

        <p className={""}>
          OPS! Sembra che questa pagina si sia persa. 
          Torna alla home e aiutaci a ritrovarla!
        </p>

        <Link to="/" className={""}>
          Torna alla home
        </Link>

      </div>

    </div>
  ); 
}

export default NotFound