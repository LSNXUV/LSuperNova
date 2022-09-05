import React from 'react'
import "../Login/Login.css"

import {useNavigate,Outlet} from 'react-router-dom'

import { useSelector, useDispatch,shallowEqual } from 'react-redux'
import {changeIssignin} from '../../redux/actions/issignin'

export default function Login () {
    const navigate = useNavigate()
    /* const [isLauncher,setisLauncher] = useState(true) */

    const issignin = useSelector(state => state.issignin,shallowEqual)
    const dispatch = useDispatch()

    const changesignin = data => {
        dispatch(changeIssignin(data))
        navigate('/home')
    }
    
    
    return(
        <div className="login">
            <div className="login-box">
                <h2>Login</h2>
                <form>
                    <div className="user-box">
                        <input type="text" name="" required=""/>
                        <label>Username</label>
                    </div>
                    <div className="user-box">
                        <input type="password" name="" required=""/>
                        <label>Password</label>
                    </div>
                    <a href="/home">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Submit
                    </a>
                </form>
            </div>
        </div>
       
    )
}

