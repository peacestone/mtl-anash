import React from 'react'
import Listing from './listing'
import {Menu} from 'semantic-ui-react'
import contactItems from '../'

class Listings extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      activeItem: ''
    }
  }


   contactItems = [{firstName: 'roger', lastName: 'albertson'}, {firstName: 'Tim', lastName: 'wahsington'} ].map((contact, index) => (
    <Listing key={index} contact={contact} />
  ))
  render(){
  return (
    <div id='listings'>
      <Menu vertical>
        {this.contactItems}
      </Menu>
    </div>
    )
  }
}

export default Listings
