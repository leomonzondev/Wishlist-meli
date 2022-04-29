
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addLista, selectListState, updateTitle } from '../../Store/listSlice'
import styles from '../../styles/Regalitos/ListasDisplay/AddListaForm.module.css'
import { useRef } from 'react';
import { useOutsideClick } from '../../Hooks/useOutsideClick';


export const AddListaForm = ({title, listId, setChangeTitle, changeTitle}) => {

    const [newTitle, setNewTitle] = useState('')
    const inputField = useRef(null)
    

    useOutsideClick(inputField, () => {
        setChangeTitle(!changeTitle)
        dispatch(updateTitle({
            listId,
            newTitle
        }))
        if(newTitle == '') {
            setNewTitle(title)
        }
        console.log(newTitle);
    })



    const dispatch = useDispatch()

    const handleTitle = (e, listId, newTitle) => {
        e.preventDefault()
        if(newTitle == '') {
            setNewTitle('Doble click para cambiar el titulo')
        }
        dispatch(updateTitle({
            listId,
            newTitle
        }))

        setChangeTitle(!changeTitle)
    }


    return (
    
        <form onSubmit={(e) => handleTitle(e, listId, newTitle)} className={styles.form}>

            <input
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                ref={inputField}
            />
        </form>
  )
}
