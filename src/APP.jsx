import React from 'react';

import { useSelector,useDispatch,shallowEqual } from 'react-redux'

import Login from './components/Login/Login'
import Home from './components/Home/Home'

import routes from './routes/index';
import { useRoutes } from 'react-router-dom';

export default function App () {

    /* const [isLauncher,setisLauncher] = useState(true) */

    const issignin = useSelector(state => state.issignin,shallowEqual)
    // const dispatch = useDispatch()
    
    const element = useRoutes(routes)
    return (
    <>
        {/* {issignin ? <Home/> : <Login/>} */}
        {element}
        
    </>)
  
}
