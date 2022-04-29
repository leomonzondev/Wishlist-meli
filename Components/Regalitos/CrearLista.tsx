import React, { useEffect, useState } from 'react'
import { ListasDisplay } from './ListasDisplay/ListasDisplay';
import styles from '../../styles/Regalitos/CrearLista.module.css'
import { ListaManagement } from './ListasDisplay/ListaManagement';
import { useDispatch, useSelector } from 'react-redux';
import  { selectManage, addManage } from '../../Store/managementSlice';
import { MdKeyboardArrowRight } from 'react-icons/md';



export const CrearLista = () => {



 const manage = useSelector(selectManage)

  const title = ''

 const dispatch = useDispatch()
  
  const deleteManage = (title) => {
    let titulo = title
    dispatch(addManage({titulo}))
  }

  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <p onClick={() => deleteManage(title)}> Listas</p>
        {
          manage.management.titulo !== '' && ( <div className={styles.arrow}><MdKeyboardArrowRight style={{margin:'-57px 5px 0 0'}} /> <p>{manage.management.titulo}</p> </div>)
        }
      </div>
 
      <div className={styles.title}>
        <h2>{manage.management.titulo}</h2>
      </div>

        <div className={styles.wrapper}>
          {
            manage.management.titulo == ''
            ? <ListasDisplay />
            : <ListaManagement titulo={manage.management.titulo} />
          }
        </div>
    </div>
  )
}
