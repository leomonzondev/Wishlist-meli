import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct, selectListState } from '../../../Store/listSlice'

import styles from '../../../styles/Regalitos/ListasDisplay/ListaManagement.module.css'
import { Searcher } from '../Searcher'
import { ProductCard } from './ProductCard'


export const ListaManagement = ({titulo}) => {

  const listas = useSelector(selectListState)

  const match = listas.filter(lista => lista.title === titulo)

  console.log(listas)

  const dispatch = useDispatch()

  // const handleProduct = (match, productId) => {
  //   console.log(match)
  //   console.log(productId);
  //   console.log(listas);
  //   dispatch(deleteProduct({match, productId}))
  // }


  return (
    <div className={styles.container}>
        <Searcher listaId={match[0]?.id} listaTitle= {match.title} productsLists={match.products}/>
        <ul>
          {
            match[0]?.products.length == 0
            ? <li className={styles.vacio}>Aún no tenés ningún producto en ésta lista</li>
            : match[0]?.products.map(product => <ProductCard product={product} listaId={match[0]?.id} />)
          }
        </ul>

    </div>
  )
}
