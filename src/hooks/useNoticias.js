import { useContext } from "react";
import NoticiasContext from "../context/NoticiasProvider";


// luego este custom hook usa el context del provider y luego se importa y llama en los componenetes donde queremos usarlo
const useNoticias = () => {
    return useContext(NoticiasContext)
}

export default useNoticias