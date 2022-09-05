// import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
// import {composeWithDevTools} from 'redux-devtools-extension'
import {configureStore}  from '@reduxjs/toolkit'

import allReducer from './reducers/index'


//之前写法
/* export default configureStore(allReducer,
    composeWithDevTools(applyMiddleware(thunk))) */
    
//新写法
export default configureStore({
    reducer:allReducer,
    middleware:[thunk],
}
)