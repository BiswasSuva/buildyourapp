import React, { useEffect, useState } from 'react'
import { getEcomSubCat } from '../api/appApi'

function useEcomSubCategory(refetch=false) {

  const [data,setData] = useState([])
useEffect(()=>{
  fetchModules()
},[])

const fetchModules = async()=>{
  let result = await getEcomSubCat()
  if(result&&result.status){
    // console.log("aa",result);
    setData(result.data)
  }
}


    
  return data
}

export default useEcomSubCategory