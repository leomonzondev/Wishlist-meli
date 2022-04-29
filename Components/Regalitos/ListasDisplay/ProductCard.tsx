import React from 'react'

import styles from '../../../styles/Regalitos/ListasDisplay/ProductCard.module.css'

export const ProductCard = ({product, handleProduct, listaId}) => {


  console.log(product);

    
  return (
    <li className={styles.container}>
        <img src={product.image} />
        <div className={styles.textnbtn}>
          <div className={styles.text} >
              <h3>{product.title}</h3>
              <p>{product.price}</p>
          </div>
          <button onClick={() => handleProduct(listaId, product.productId)} >Eliminar</button>
        </div>
    </li>
  )
}
