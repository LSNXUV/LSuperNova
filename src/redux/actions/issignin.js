

export const changeIssignin = data => ({type:'changeIssignin',data})

export const AsyncChange = (data,time) => {

    return (dispatch) => {
        setTimeout( () => {
            dispatch(changeIssignin(data))
        },time)
    }
}