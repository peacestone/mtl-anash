const peopleReducer = (state = {people: [], searchInput: ''}, action ) => {
    switch(action.type){
        case 'ADD_PEOPLE':
            return Object.assign({},state, {people: action.payload})
        case 'ADD_QUERY_INPUT':
            return Object.assign({},state, {searchInput: action.payload})
        default:
            return state
    }
}

export default peopleReducer