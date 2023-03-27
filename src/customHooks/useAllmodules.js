import React, { useEffect, useState } from 'react'
import { getAppModule } from '../api/appApi'

function useAllmodules() {

  const [data,setData] = useState([])
useEffect(()=>{
  fetchModules()
},[])

const fetchModules = async()=>{
  let result = await getAppModule()
  if(result&&result.status){
    console.log("aa",result);
    setData(result.data)
  }
}


    
  return data
}

export default useAllmodules