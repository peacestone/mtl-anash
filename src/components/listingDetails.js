import React from 'react'
import {Container, Segment, Message} from 'semantic-ui-react'
import {connect} from 'react-redux'

const listingDetails = ({selectedPerson}) => {


    return(
        
        <div text style={{ fontSize: '2em', textAlign: 'center' }}    >
             <h3 style={{fontSize: '2em'}}>{selectedPerson.firstName} {selectedPerson.lastName}</h3>
             <span>{selectedPerson.address} </span><br />
             <span>{selectedPerson.zipCode}</span><br />
             <span>{selectedPerson.phoneNumber}</span>


        </div>
    )
}




export default listingDetails