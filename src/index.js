import React from 'react'
import reactDom from 'react-dom'
import App from './APP.jsx'

import store from './redux/store'
import {Provider} from 'react-redux'

//引入react-router-dom核心
import {BrowserRouter} from 'react-router-dom'


/* reactDom.render(
    
    <Provider store={store}>  
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider> 
,document.getElementById('root')) */

import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')).render(
    <Provider store={store}>  
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider> 
)

/* store.subscribe(() => {
    reactDom.render(<App/>,document.getElementById('root'))

}) */

