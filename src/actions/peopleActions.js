export default {
    addPeople(people) {
        return {type: "ADD_PEOPLE", payload: people}
    },

    addQueryInput(query) {
        return {type: 'ADD_QUERY_INPUT', payload: query}
    }

}