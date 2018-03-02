import React from 'react'
import {List} from 'semantic-ui-react'

const listing = ({contact, handleListingClick, resultsId}) => {
  return (
    <List.Item onClick={handleListingClick}>
      <List.Content id='listing'>
        <List.Header  id={resultsId}>{contact.firstName} {contact.lastName}</List.Header>
      </List.Content>
    </List.Item>
  
  )
}

export default listing
