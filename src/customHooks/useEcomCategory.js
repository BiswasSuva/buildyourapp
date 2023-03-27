import React, { useEffect, useState } from 'react'
import { getEcomCat } from '../api/appApi'

function useEcomCategory(refetch=false) {

  const [data,setData] = useState([])
useEffect(()=>{
  fetchModules()
},[refetch])

const fetchModules = async()=>{
  let result = await getEcomCat()
  if(result&&result.status){
    // console.log("aa",result);
    setData(result.data)
  }
}


    
  return data
}

export default useEcomCategory