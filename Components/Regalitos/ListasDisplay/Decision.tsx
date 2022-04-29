import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteList } from '../../../Store/listSlice'

import styles from '../../../styles/Regalitos/ListasDisplay/Decision.module.css'



export const Decision = ({title, listId, borrar, setBorrar}) => {

    const dispatch = useDispatch()

    const handleDelete = (listId) => {
        dispatch(deleteList({listId}))
      }


  return (
      <div className={styles.container}>

            <h2>Eliminar {title}?</h2>

          <div className={styles.btns}>
            <button className={styles.eliminar} onClick={() => handleDelete(listId)}>Eliminar</button>
            <button className={styles.cancelar} onClick={() => setBorrar(!borrar)}>Cancelar</button>
        </div>
      </div>
  )
}
