import React from 'react'

const listing = ({contact}) => {

  return (
    <div id='listing'>{contact.firstName}  {contact.lastName}</div>
  )
}

export default listing
