import React, { useEffect, useState } from 'react'
import { getEcomSubCat, getLogo } from '../api/appApi'

function useScreen() {

  const [data,setData] = useState({})
useEffect(()=>{
  fetchModules()
},[])

const fetchModules = async()=>{
  let result = await getLogo()
  if(result&&result.status){
    // console.log("aa",result);
    setData(result.data)
  }
}


    
  return data
}

export default useScreen