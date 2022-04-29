import React from 'react'

import styles from '../../../styles/Regalitos/ListasDisplay/ProductCard.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, selectListState } from '../../../Store/listSlice';
import managementSlice, { selectManage } from '../../../Store/managementSlice';

export const ProductCard = ({product, listaId}) => {

  const manage = useSelector(selectManage)

  const nombre = manage.management

  const listas = useSelector(selectListState)

  const dispatch = useDispatch()

  const handleDelete = (nombre) => {
    dispatch(deleteProduct({nombre}))
    console.log(listas);
  }
    
  return (
    <li className={styles.container}>
        <img src={product.image} />
        <div className={styles.textnbtn}>
          <div className={styles.text} >
              <h3>{product.title}</h3>
              <p>{new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(product.price)}</p>
          </div>
          <button onClick={() => handleDelete(nombre)} >Eliminar</button>
        </div>
    </li>
  )
}
