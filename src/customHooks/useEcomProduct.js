import React, { useEffect, useState } from 'react'
import { getEcomCat, getEcomProduct } from '../api/appApi'

function useEcomProduct({refetch=false}) {

  const [data,setData] = useState([])
useEffect(()=>{
  fetchModules()
},[refetch])

const fetchModules = async()=>{
  let result = await getEcomProduct()
  if(result&&result.status){
    // console.log("aa",result);
    setData(result.data)
  }
}


    
  return data
}

export default useEcomProduct