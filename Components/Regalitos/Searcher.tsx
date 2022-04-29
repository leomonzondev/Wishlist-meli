import React, { useRef, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { useOutsideClick } from '../../Hooks/useOutsideClick'
import styles from '../../styles/Regalitos/Searcher.module.css'
import { SearchResults } from './SearchResults'

export const Searcher = ({listaId, listaTitle, productsLists}) => {

    const [resultados, setResultados] = useState([])
    const [input, setInput] = useState('')
    const [showSearch, setshowSearch] = useState(false)

    const [num, setNum] = useState()


    const searchRef = useRef(null)

    useOutsideClick(searchRef,() => {
        setshowSearch(!showSearch)
    })

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        const search = () => {
          fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${input}&limit=5`)
          .then(res => res.json())
          .then(obj => setResultados(obj.results))
        }
        search()

        setshowSearch(true)
    }

    const handleInput = e => setInput(e.target.value)


  return (
    <div className={styles.searcher}>
        <form onSubmit={handleSearch} className={styles.searcherForm} >
            <input placeholder='Buscá productos para agregar...' value={input} onChange={handleInput} />
            <button>
                <AiOutlineSearch size={20} color="#666" />
            </button>
        </form>
        {
            showSearch && (
                <div className={styles.resultBoxContainer}>

                  {
                    resultados.map(result => <SearchResults key={result.id} listaId={listaId} productId={result.id} image={result.thumbnail} title={result.title} price={result.price} />)
                  }
                    
                </div>
            )
        }
        </div> 
  )
}
