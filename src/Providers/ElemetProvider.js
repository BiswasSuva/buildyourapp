import React, { useContext, useEffect, useState } from "react";
const ElementContext = React.createContext()


export const useElementList = ()=>useContext(ElementContext)
export const ElementProvider = ({children})=>{

    const [elementList,setElementList] = useState([])

    useEffect(()=>{
        
    },[])
    return(
        <ElementContext.Provider value={{elementList,setElementList}}>
            {children}
        </ElementContext.Provider>
    )
}