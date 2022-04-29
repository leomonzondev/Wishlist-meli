import React from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai'

import styles from '../../../styles/Regalitos/ListasDisplay/ListasDisplay.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { addLista, selectListState } from '../../../Store/listSlice';
import { ListaCard } from './ListaCard';
import Link from 'next/link';
import { useEffect } from 'react';

export const ListasDisplay = () => {

  const listas = useSelector(selectListState)

  useEffect(() => {
    console.log(listas);
  },[listas])

  const dispatch = useDispatch()

  const newCard = ''

  const handleCard = (title) => {
    dispatch(addLista({title}))
  }


  return (
    <main className={styles.container}>
        <div className={styles.banner}></div>
        <div className={styles.wrapper}>

          {listas.map(lista =>  <ListaCard key={lista.id} listId={lista.id} title={lista.title} quantity={lista.products.length} /> )}

          <div className={styles.agregar} onClick={() => handleCard(newCard)}>
              <AiOutlinePlusCircle size={64}/>
          </div>
        </div>
    </main>
  )
}
