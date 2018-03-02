const peopleReducer = (state = {people: [], selectedPerson: {id: '' , firstName: '', lastName: '', address: '', city: '', state: '', zipCode: '', country: '', phoneNumber: ''}}, action ) => {
    switch(action.type){
        case 'RECIEVE_PEOPLE':
            return Object.assign({},state, {people: action.payload})
        case 'SELECTED_PERSON':
            return Object.assign({},state, {selectedPerson: action.payload})
        default:
            return state
    }
}

export default peopleReducer