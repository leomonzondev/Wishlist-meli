import type { NextPage } from 'next'

import banner from '../images/es-desktop.jpg'
import styles from '../styles/Home.module.css'

import buy from '../images/buy-heart.svg'
import sell from '../images/free-sell.svg'
import ship from '../images/shipping.svg'
import Image from 'next/image';

import { AiFillContainer, AiOutlineCar } from 'react-icons/ai'
import { GiSteeringWheel } from 'react-icons/gi'
import {IoColorPaletteOutline, IoFootballOutline, IoGameControllerOutline, IoShirtOutline } from 'react-icons/io5';
import { MdOutlinePhoneAndroid } from 'react-icons/md'
import {FiMonitor} from 'react-icons/fi'
import { BsCamera, BsDisc, BsFillHeartFill, BsMic } from 'react-icons/bs'
import { BiBuildingHouse, BiCategory, BiFridge } from 'react-icons/bi'
import Lottie from 'lottie-web'


import { useEffect, useRef } from 'react';




const size = 48

const Home: NextPage = () => {


  const heart = useRef(null)


    const handleHeart = () => {
      Lottie.loadAnimation({
        container: heart,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: require('./hearts.json'),
      })
      console.log('entro');
    }



  return (
    <>

    <div className={styles.container} >
        <div>
          <Image src={banner} alt='banner' />
        </div>
      <div className={styles.categoriasContainer}>
        <h2>Categorías populares</h2>
        <div className={styles.categorias}>
            <ul className={styles.ul}>
              <li>
                <GiSteeringWheel size={size} />
                <p>Accesorios para Vehiculos</p></li>
              <li>
                <IoColorPaletteOutline size={size} />
                <p>Arte y Antigüedades</p></li>
              <li>
                <MdOutlinePhoneAndroid size={size} />
                <p>Celulares y Teléfonos</p></li>
              <li>
                <FiMonitor size={size} />
                <p>Computación</p></li>
              <li>
                <BsCamera size={size} />
                <p>Cámaras Digitales y Foto</p></li>
              <li>
                <BiFridge size={size} />
                <p>Hogar y Electrodomésticos</p></li>
              <li>
                <AiOutlineCar size={size} />
                <p>Autos, Motos, y Otros</p></li>
              <li>
                <BsDisc size={size} />
                <p>Coleccionables y Hobbies</p></li>
              <li>
                <IoGameControllerOutline size={size} />
                <p>Consolas y Videojuegos</p></li>
              <li>
                <IoFootballOutline size={size} />
                <p>Deportes y Fitness</p></li>
              <li>
                <BsMic size={size} />
                <p>Electrónica, Audio y Video</p></li>
              <li> 
                <IoShirtOutline size={size} />
                <p>Indumentaria y Accesorios</p></li>
              <li>
              <BiBuildingHouse size={size} />
                <p>Inmuebles</p></li>
              <li>
                <BiCategory size={size} />
                <p>Otras categorías</p></li>
            </ul>
        </div>
      </div>
        
        <footer className={styles.footer}>
          <ul>
            <li>
              <div className={styles.info_slide}>
                <div className={styles.imgContainer}>
                  <Image src={buy} width={81} height={50}  />
                </div>
                <h4>Comprá sin moverte</h4>
                <p>Encontrá lo que necesitas, y coordiná el pago y la entrega con el vendedor. Es fácil y rápido. ¡Todos podemos hacerlo!</p>
                <a href='#'>Cómo comprar en Mercado Libre</a>
              </div>
            </li>

            <li>
              <div className={styles.info_slide}>
                <div className={styles.imgContainer}>
                  <Image src={ship} width={56} height={49} />
                </div>
                <h4>Recibí tu producto</h4>
                <p>Acordá la entrega de tu compra con el vendedor. Podés recibirlo en tu casa, en la oficina o retirarlo. ¡Vos decidís qué preferis!</p>
                <a href='#'>Cómo coordino la entrega</a>
              </div>
            </li>

            <li>
              <div className={styles.info_slide}>
                <div className={styles.imgContainer}>

                  <Image src={sell} width={63} height={56} />
                </div>
                <h4>Vendé gratis</h4>
                <p>Miles de personas quieren lo que ofreces. Publicá y vas a ver qué pronto llegan las compras. ¡Vos no pagas nada!</p>
                <a href='#'>Cómo vender en Mercado Libre</a>
              </div>
            </li>
          </ul>

        </footer>
        <div className={styles.firma}>
            <p>Made it with <BsFillHeartFill ref={heart} onMouseEnter={handleHeart} color="fff159" size={16} /> by <a href='https://github.com/Leob4rr0s' target="_blank" rel='noreferrer' >Leo</a>  </p>
          </div>
    </div>
    </>
  )
}

export default Home
