import Login from '../components/Login/Login';
import Home from '../components/Home/Home';

import {Navigate} from 'react-router-dom'

import Intro from '../components/Intro/intro'

const routes = [

    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/home',
        element:<Home/>,
        children:[
            
            {
                path:'intro',
                element:<Intro/>,
                
            },
            {
                path:'about',
                element:<div>about</div>
            },
            {
                path:'contact',
                element:<div>contact</div>
            },
            {
                path:'',
                element:<Navigate to='intro?id=0' />
            }
        ]
    }
    ,
    {
        path:'/',
        element:<Navigate to='/login'/>,
    },
]
export default routes