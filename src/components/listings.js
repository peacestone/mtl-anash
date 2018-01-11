import React from 'react'
import Listing from './listing'

class Listings extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      activeItem: ''
    }
  }


  const contactItems = [{firstName: 'roger', lastName: 'albertson'}, {firstName: 'Tim', lastName: 'wahsington'} ].map((contact, index) => (
    <Listing key={index} contact={contact} />
  ))
  render(){
  return (
    <div id='listings'>
      <Menu vertical>
        {contactItems}
      </Menu>
    </div>
    )
  }
}

export default Listings
