import React, { useEffect } from 'react'
import Banner from './Banner';
import Helpyou from './Helpyou';
import Smartbox from './Smartbox';
import Mobiledashboard from './Mobiledashboard';
import GetApp from './GetApp';
import Gototop from '../../Component/Gototop';
import { useSelector,useDispatch } from 'react-redux';
import { fetchuser } from '../../redux/reducers/User';
function Index() {
  const dispatch = useDispatch()
  const {loginStatus} = useSelector((state)=>state.User)
  console.log(loginStatus);
  useEffect(()=>{
// dispatch(fetchuser())
  },[])
  return (
    <>
      <Banner />
      <Helpyou />
      <Mobiledashboard/>
      <Smartbox />
      <GetApp />
      <Gototop />
    </>
  )
}

export default Index