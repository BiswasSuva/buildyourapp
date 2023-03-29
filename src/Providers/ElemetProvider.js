import React, { useContext, useEffect, useState } from "react";
const ElementContext = React.createContext()


export const useElementList = ()=>useContext(ElementContext)
export const ElementProvider = ({children})=>{

    const [elementList,setElementList] = useState([])
    const [rerender,setRender] = useState(false)

    useEffect(()=>{
        
    },[])
    return(
        <ElementContext.Provider value={{elementList,setElementList,rerender,setRender}}>
            {children}
        </ElementContext.Provider>
    )
}