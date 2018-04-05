    import seeds from './seeds'
    
    
    const fetchPeople = () => {

        return dispatch => {
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

    
//TODO implement this in fetch action
    const xfetchPeople = () => {
        fetch('http://localhost:3001/api/people')
        .then((people) => {
          
          return people.json()
        }, error => console.log(error))
        .then(json => this.props.fetchPeople(json))
  
      }
      //fetchPeople()