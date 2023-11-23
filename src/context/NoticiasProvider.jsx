import axios from 'axios';
import React from 'react'
import { useState, useEffect, createContext } from 'react'

const NoticiasContext = createContext();


// Como el nombre explica es el provider de la logica funcionalidades y estados

const NoticiasProvider = ({ children }) => {
    // Estados
    const [categoria, setCategoria] = useState('entertainment');
    const [noticias, setNoticias] = useState([]);

    useEffect(() => {
        const fetchNoticias = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&pageSize=100&apiKey=${import.meta.env.VITE_API_KEY}`
            const { data } = await axios(url)
            setCategoria(data.articles)

        }
        fetchNoticias()
    }, [categoria])


    // funciones
    const handleChangeCategoria = (event) => {
        setCategoria(event.target.value)
    }


    // Noticias provider pasa toda la informacion a sus hijos aca en value, se ponen todos los valores que queremos usar en otros componentes
    return (
        <NoticiasContext.Provider value={{ categoria, handleChangeCategoria, noticias }}>
            {children}
        </NoticiasContext.Provider>
    )
}

export { NoticiasProvider }

export default NoticiasContext;