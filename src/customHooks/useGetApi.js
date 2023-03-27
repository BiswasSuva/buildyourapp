import React, { useEffect, useState } from 'react'
import HttpClient from '../utils/HttpClient'
import HttpClientXml from '../utils/HttpClientXml'

function useGetApi(url="",refetch=false) {

  const [data,setData] = useState([])
useEffect(()=>{
  fetchModules()
},[refetch])

const fetchModules = async()=>{

  let result = await HttpClient.requestData(url,"GET")
  console.log("get",result);
  if(result&&result.status){
    console.log("get",result);
    setData(result.data)
  }
}


    
  return data
}

export default useGetApi