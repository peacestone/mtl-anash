import React from 'react'
import {Container} from 'semantic-ui-react'
import {connect} from 'react-redux'

const listingDetails = ({selectedPerson}) => {


    return(
        <Container text style={{float: 'right', margin: "0 36.5%", fontSize: '2em'}}    >
            <h3>{selectedPerson.firstName} {selectedPerson.lastName}</h3>
            <span>{selectedPerson.address} </span><br />
            <span>{selectedPerson.city}  {selectedPerson.state} </span><br />
            <span>{selectedPerson.zipCode}  {selectedPerson.country} </span>

        </Container>
    )
}




export default listingDetails