import React from 'react'
import Listing from './listing'
import {List} from 'semantic-ui-react'

class Listings extends React.Component {

  constructor(props) {
    super(props)

    
  }


  render(){
    
    const contactItems = this.props.people.map((contact, index) => (
      <Listing handleListingClick={this.props.handleListingClick} key={index} contact={contact} resultsId={index} />
    ))

    
  return (
    <div id='listings' >
      <List selection verticalAlign='middle' divided  >
        {contactItems.length > 0 ? contactItems : "No Matches Found!"}
      </List>
    </div>
    )
  }
}

export default Listings
