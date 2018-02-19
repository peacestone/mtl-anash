import React from 'react'
import Listing from './listing'
import {List} from 'semantic-ui-react'

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
      <List selection verticalAlign='middle'>
        {this.contactItems}
      </List>
    </div>
    )
  }
}

export default Listings
