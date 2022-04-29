import React, { useEffect, useState } from 'react'
import { BsShare, BsTrash } from 'react-icons/bs'
import { FiShare2 } from 'react-icons/fi'
import { CgLock } from 'react-icons/cg'
import {GrUnlock, GrLock} from 'react-icons/gr'

import styles from '../../../styles/Regalitos/ListasDisplay/ListaCard.module.css'
import { RiLockLine, RiLockUnlockLine } from 'react-icons/ri'
import { addLista, deleteList, selectListState } from '../../../Store/listSlice'
import { useDispatch, useSelector } from 'react-redux'
import { AddListaForm } from '../AddListaForm'
import Link from 'next/link'
import { addManage, selectManage } from '../../../Store/managementSlice'
import { Decision } from './Decision'


const size = 20




export const ListaCard = ({listId, title, quantity}) => {
  
  const [changeTitle, setChangeTitle] = useState(false)
  const [open, setOpen] = useState(false)
  const [borrar, setBorrar] = useState(false)

  const dispatch = useDispatch()

  const listas = useSelector(selectListState)

  console.log(listas);

  const manage = useSelector(selectManage)

  const titulo = title

  const enterToManagement = (titulo) => {
    dispatch(addManage({titulo}))
    console.log(manage.management);
  }


  
  return (
    
    <>
    
    <div className={styles.container}>
    {/* <Link href={title == undefined ? '' : `listas/${title}`}> */}
    <div className={styles.link} onClick={() => enterToManagement(titulo)} ></div>
    {/* </Link> */}
      
      {
        borrar ? <div className={styles.decision}><Decision title={title} listId={listId} borrar={borrar} setBorrar={setBorrar} /></div> : ''
      }

        <div className={styles.text}>
          <div onDoubleClick={() => setChangeTitle(!changeTitle)}>
            <div className={styles.title}>
             {changeTitle ? <AddListaForm title={title} listId={listId} setChangeTitle={setChangeTitle} changeTitle={changeTitle}/> : <h2>{title}</h2> && title === undefined ? <h2>Agregar titulo</h2> : <h2>{title}</h2> }
            </div>
          </div>
          <div className={styles.cantidad}>
            <h4>{quantity} items</h4>
          </div>
          </div>
          
          <ul className={styles.btns}>
            <li onClick={() => setBorrar(!borrar)}><BsTrash size={size} /></li>
            <li title='No disponible'><FiShare2 size={22} /></li>
            <li onClick={() => setOpen(!open)} title='No disponible'> {open ? <RiLockUnlockLine size={23}/> : <RiLockLine size={23}/>} </li>
          </ul>
    </div>
    
    </>
    
    )
  }
  
