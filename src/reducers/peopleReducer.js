const peopleReducer = (state = {people: [], searchInput: ''}, action ) => {
    switch(action.type){
        case 'FETCH_PEOPLE':
            return Object.assign({},state, {people: action.payload})
        default:
            return state
    }
}

export default peopleReducer