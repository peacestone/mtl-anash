    import seeds from './seeds'
    
    
    const fetchPeople = () => {

        return dispatch => {
            dispatch({type: 'FETCH_PEOPLE'})
            fetch('http://localhost:3001/api/people')
            .then((response) => {
                console.log(response)
                if(!response.ok){
                    throw new Error('bad request')
                }
                
                return response.json()
            }, error => console.log(error))
            .then(people => dispatch({type: "RECIEVE_PEOPLE", payload: people}))
        
            }

        }

    
          
    

    const selectPerson = (person) => (
        {type: 'SELECTED_PERSON', payload: person}
    )

    const setNavBarItem = (item) => ( {type: 'SET_NAVBAR_ITEM', payload: item} )

    const removeSelectedPerson = () => (
        {type: 'REMOVE_SELECTED_PERSON'}
    )


    export {fetchPeople, selectPerson, setNavBarItem, removeSelectedPerson}

    
