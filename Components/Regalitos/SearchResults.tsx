import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addLista, addProduct, selectListState } from '../../Store/listSlice'

import styles from '../../styles/Regalitos/SearchResults.module.css'


export const SearchResults = ({listaId, productId, image, title, price}) => {


  const listas = useSelector(selectListState)

    const dispatch = useDispatch()

    const quantity = 1

    const addProductToList = (e,  listaId, productId, image, title, price ) => {
      e.preventDefault()

      dispatch(addProduct({
        listaId,
        productos:{
          productId,
          title,
          image,
          price,
          quantity
        }
      }))
      



    }


  return (
    <div className={styles.container}>
        <img src={image} />
        <div className={styles.text}>
            <h3>{title}</h3>
            <p>{new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(price)}</p>
        </div>
        <button onClick={ e => addProductToList(e, listaId, productId, image, title, price)}>Agregar</button>
    </div>
  )
}
