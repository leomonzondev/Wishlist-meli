
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addLista, selectListState, updateTitle } from '../../Store/listSlice'
import styles from '../../styles/Regalitos/ListasDisplay/AddListaForm.module.css'
import { useRef } from 'react';
import { useOutsideClick } from '../../Hooks/useOutsideClick';


export const AddListaForm = ({title, listId, setChangeTitle, changeTitle}) => {

    const [newTitle, setNewTitle] = useState(title)
    const inputField = useRef(null)
    

    useOutsideClick(inputField, (listId, newTitle) => {
        dispatch(updateTitle({
            listId,
            newTitle
        }))
        setChangeTitle(!changeTitle)
        
        console.log(newTitle);
    })



    const dispatch = useDispatch()


    const onTitleChanged = e => {
        setNewTitle(e.target.value)
        console.log(newTitle);
    }

    const handleTitle = (e, listId, newTitle) => {
        e.preventDefault()
        if(newTitle == '') {
            newTitle = 'Agregar titulo'
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
                onChange={onTitleChanged}
                placeholder={newTitle}
                ref={inputField}
            />
        </form>
  )
}
