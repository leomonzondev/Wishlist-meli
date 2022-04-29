
import Link from 'next/link'
import React from 'react'
import {BiWorld} from 'react-icons/bi'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
import {BsCart2} from 'react-icons/bs'
import {AiOutlineSearch} from 'react-icons/ai'
import styles from '../styles/NavBar.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { addManage, selectManage } from '../Store/managementSlice'



export const NavBar = () => {


    const dispatch = useDispatch()

    const manage = useSelector(selectManage)
  
    const titulo = ''
  
    const enterToManagement = (titulo) => {
      dispatch(addManage({titulo}))
      console.log(manage.management);
    }



return (
    <nav className={styles.navBar}>
        <div className={styles.wrapper}>

        {/* Seccion Left */}
        <div className={styles.leftContainer}>
            <Link href='/' >
                <div className={styles.logo}><a>Mercado Libre Argentina - Donde comprar y vender de todo</a></div>
            </Link>
            <div className={styles.envio}>
                <BiWorld size={24} color="#333" />
                <div className={styles.envioText}>
                    <span>Enviar a</span>
                    <p>World Wide </p>
                </div>
            </div>
        </div>

        {/* sección Center */}
        <div className={styles.midContainer}>
            <form className={styles.searcher}>
                <input placeholder="Buscar productos, marcas, y más..." />
                <button>
                    <AiOutlineSearch size={20} color="#666" />
                </button>
            </form>

            <ul className={styles.ul_products}>
                <li>
                    <a>Categorías</a>
                    <MdOutlineKeyboardArrowDown size={16} color="#7f782c" />
                </li>
                <li>
                    <a>Historial</a>
                </li>
                <li>
                    <a>Vendé gratis</a>
                </li>
                <li>
                    <a>Ayuda</a>
                </li>
            </ul>
        </div>

        {/* sección Right */}
        <div className={styles.rightContainer}>

            <div className={styles.suscripcion}>
                
            </div>
            <ul className={styles.ul_user}>
                <li onClick={() => enterToManagement(titulo)}>
                    <Link href="/listas" >
                        <a>Listas</a>
                    </Link>
                </li>
                <li>
                    <a>Creá tu cuenta</a>
                </li>
                <li>
                    <a>Ingresá</a>
                </li>
                <li>
                    <a>Mis compras</a>
                </li>
                <BsCart2 size={20} />
            </ul>
        </div>
        </div>
    </nav>
)
}

