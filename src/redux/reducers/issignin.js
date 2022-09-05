

const initialState = false

export default function issigninReducer(preState = initialState,action){
  
    const {type,data} = action
    switch(type) {
        case 'changeIssignin':
            return !preState

        default:
            return preState
    }



}