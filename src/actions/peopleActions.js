 
    const fetchPeople = (people) => {
        return {type: "RECIEVE_PEOPLE", payload:  [{firstName: 'roger', lastName: 'albertson'}, {firstName: 'Tim', lastName: 'wahsington'}, {firstName: "chani", lastName: 'steinmetz'}]  }
    }

    const selectPerson = (person) => (
        {type: 'SELECTED_PERSON', payload: person}
    )


    export {fetchPeople, selectPerson}

