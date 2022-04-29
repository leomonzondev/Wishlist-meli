import { GetStaticProps, NextPage, GetStaticPaths } from 'next'
import Link from 'next/link';
import { useRouter } from 'next/router'
import React from 'react'
import { ListaManagement } from '../../Components/Regalitos/ListasDisplay/ListaManagement'
import { Sidebar } from '../../Components/Regalitos/Sidebar';
import { useSelector } from 'react-redux';
import { selectListState } from '../../Store/listSlice';

const ListPage: NextPage = ({title}) => {

    const router = useRouter()

    console.log(router.query);

    return(
        <>
        <Sidebar />
        <Link href="/listas">
        <a>Volver atrás</a>
        
        </Link>
        <h2>{title}</h2>
        </>
    )
}


export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const listas = useSelector(selectListState)
    
    const recorrido = listas.map((titulo, index) => `${index + 1}` )

    console.log(recorrido);
    return {
        paths: [
            {
                params: {
                    title: 'Cumpleaños'
                }
            },
            {
                params: {
                    title: 'Boda'
                },
            }
        ],
        fallback: false
    }
}


export const getStaticProps: GetStaticProps = async (ctx) => {

    return {
        props: {
            id: 1,
            title: 'Cumpleaños'
        }
    }

}


export default ListPage