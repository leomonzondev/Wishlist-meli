import React, {useState } from 'react'


import { Sidebar } from '../Components/Regalitos/Sidebar';


import { Hero } from '../Components/Regalitos/Hero';


import styles from '../styles/Listas.module.css'
import { CrearLista } from '../Components/Regalitos/CrearLista';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectListState } from '../Store/listSlice';



const listas = () => {

  const [btnCreate, setBtnCreate] = useState(false)


  const listas = useSelector(selectListState)

  useEffect(() => {
    if(listas.length > 0) {
      setBtnCreate(true)
    } else {
      setBtnCreate(false)
    }

  },[]) 

  const handleBtn = () => {
    setBtnCreate(!btnCreate)
  }

  return (
    <div className={styles.listas}>
      <Sidebar />

      {
        btnCreate 
        ? <CrearLista />
        : <Hero setEstado={handleBtn} />
      }

        {/* <PostList />
        <AddPostForm /> */}
    </div>
    

  )
}

export default listas