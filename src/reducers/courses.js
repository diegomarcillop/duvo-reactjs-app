 

 function reducer(state = [],{type, id, payload}){
    switch (type) {
        case 'GET_COURSES':{
            return payload 
             
        }
        default:
            return state;
    }
}

export default reducer;