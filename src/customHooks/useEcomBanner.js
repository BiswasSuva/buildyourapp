import React, { useEffect, useState } from 'react'
import { ecomBanner} from '../api/appApi'

function useEcomBanner({refetch=false}) {

  const [data,setData] = useState([])
useEffect(()=>{
  fetchModules()
},[refetch])

const fetchModules = async()=>{
  let result = await ecomBanner()
  if(result&&result.status){
    // console.log("aa",result);
    setData(result.data)
  }
}


    
  return data
}

export default useEcomBanner