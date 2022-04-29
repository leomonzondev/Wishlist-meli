import React, { useState } from 'react'


import {IoIosArrowDown, IoIosArrowUp, IoIosMenu} from 'react-icons/io'

import {BsCardList} from 'react-icons/bs'

import styles from '../../styles/Regalitos/Sidebar.module.css'
import { selectListState } from '../../Store/listSlice'
import { useDispatch, useSelector } from 'react-redux'
import { addManage } from '../../Store/managementSlice'


export const Sidebar = () => {

    const [showLists, setShowsLists] = useState(false)


    const listas = useSelector(selectListState)

    const dispatch = useDispatch()

    const handleShow = () => {
        setShowsLists(!showLists)
    }


    // if (typeof window !== 'undefined') {
    //     const body = document.getElementById('sideBar')
    //     let lastScroll = 0
        
    //     window.addEventListener('scroll',() => {
    //         let currentScroll = window.scrollY
            
    //         if (currentScroll <= 0 ) {
    //             body.classList.remove('scroll-up')
    //         }
            
    //         if ( currentScroll > lastScroll && !body.classList.contains('scroll-down')) {
    //             body.classList.remove('scroll-up')
    //             body.classList.add('scroll-down')
    //         }
            
    //         if (currentScroll < lastScroll && body.classList.contains('scroll-down')){
    //             body.classList.remove('scroll-down')
    //             body.classList.add('scroll-up')
    //         }
            
    //         lastScroll = currentScroll
            

    //     })
    // }


    const enterToManagement = (titulo) => {
        dispatch(addManage({titulo}))
    }
    
  return (
    <div className={styles.container} id="sideBar">
        <div className={styles.header}>
            <IoIosMenu size={26} color="#666" />
            <h2>Mi cuenta</h2>
        </div>
        <ul className={styles.ul}>
            <li onClick={handleShow}  >
                <span className={styles.selector}></span>
                <div className={styles.liWrapper}>
                    <BsCardList size={26} color="#666" />
                    <h3>Listas</h3>
                    {showLists ? <IoIosArrowUp size={20} color="#666" /> : <IoIosArrowDown size={20} color="#666" />}
                    
                </div>
            </li>
            {
                    showLists && (
                    <ul className={styles.creadas}>
                        {
                            listas.length <= 0
                            ? <li><p style={{margin:'0 100px 0 0'}}>Aún no tenés una lista creada </p></li>
                            : listas.map(list => <li key={list.id} onClick={() => enterToManagement(list.title)} ><p>{list.title}</p></li>)
                        }
                    </ul>
                    )
                }
            <li>
                
                <h3></h3>
            </li>
        </ul>
    </div>
  )
}
