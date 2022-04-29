import React from 'react'


import styles from '../../styles/Hero.module.css'
import { RiFileList3Line } from 'react-icons/ri'
import { BsGift } from 'react-icons/bs';

const size = 48

export const Hero = (props) => {



  return (
    <div className={styles.listas}>
        <div className={styles.heroContainer}>
          <div className={styles.hero}>
              <div className={styles.bannerContainer}></div>
                  <div className={styles.title}>
                    <h1>Listas</h1>
                    <h3>Para todo lo que necesites</h3>
                    <button onClick={props.setEstado} >Crear mi lista</button>
                    </div>
              <div className={styles.action}>
                <div className={`${styles.action_slide} ${styles.tobuy}`} >
                  <div>
                    <h2>Lista de Compras</h2>
                    <p>Añadí articulos próximos a comprar</p>
                  </div>
                  <RiFileList3Line size={size} id={styles.listIcon} />
                </div>

                  <div className={`${styles.action_slide} ${styles.wishes}`}>
                    <div>
                      <h2>Lista de Deseos</h2>
                      <p>Compartí qué cosas te gustaría que te regalen</p>
                    </div>
                    <BsGift size={size}/>
                  </div>
              </div>
          </div>

              <div className={styles.infoContainer}>
                <ul>
                <li>
                    <div className={styles.infoSlide}>
                      
                        <div>
                          <h3>Otorgá regalos asombrosos</h3>
                          <p>Recordá las listas de tus amigos y compartí las tuyas</p>
                        </div>
                    </div>
                  </li>

                  <li>
                    <div className={styles.infoSlide}>
                      <div>
                        <h3>Ahorrá tiempo</h3>
                        <p>Creá tus listas con tus productos favoritos para cualquier tipo de evento </p>
                      </div>
                    </div>
                  </li>

                  <li>
                  <div className={styles.infoSlide}>

                    </div>
                  </li>

                    <li>
                    <div className={styles.infoSlide}>

                    </div>
                  </li>

                </ul>
              </div>
        </div>
    </div>
  )
}
