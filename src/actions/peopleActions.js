 
    const fetchPeople = (people) => {
        return {type: "GET_PEOPLE", payload:  [{firstName: 'roger', lastName: 'albertson'}, {firstName: 'Tim', lastName: 'wahsington'}, {firstName: "chani", lastName: 'steinmetz'}]  }
    }

    const addQueryInput = (query) => {
        return {type: 'ADD_QUERY_INPUT', payload: query}
    }

    export {fetchPeople}

