import React from 'react'
import {List} from 'semantic-ui-react'

const listing = ({contact}) => {
  return (
    <List.Item>
      <List.Content id='listing'>
        <List.Header>{contact.firstName} {contact.lastName}</List.Header>
      </List.Content>
    </List.Item>
  
  )
}

export default listing
