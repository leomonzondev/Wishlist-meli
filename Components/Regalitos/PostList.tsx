import { useSelector } from "react-redux";

import React from 'react'
import { selectListState } from "../../Store/listSlice";
import { ListEdit } from "./ListEdit";



export const PostList = () => {

  const listas = useSelector(selectListState)

  const renderedListas = listas.map( lista => (
    <article key={lista.id} style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}} >
      <h3>{lista.title}</h3>
      <ListEdit listaId={lista.id} listaTitle={lista.lista} productsLists={lista.products} />
    </article>
  ))


  

    return(
      <section>
        {renderedListas}
      </section>
    )

}


export default PostList