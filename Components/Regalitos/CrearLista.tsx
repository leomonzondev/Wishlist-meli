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
    // console.log('borrado');
  }

  return (
    <div className={styles.container}>
      <div>
        <p onClick={() => deleteManage(title)} >Listas</p>
      </div>
 
      <div className={styles.nav}>
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
