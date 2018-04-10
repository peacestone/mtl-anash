import React from 'react'
import Listing from './listing'
import {List} from 'semantic-ui-react'

class Listings extends React.Component {

  constructor(props) {
    super(props)

    
  }


  render(){
    
    let contactItems
    
    switch(this.props.queryBy){
      case 'address':
        contactItems = this.props.people.map((contact, index) => (
          <Listing handleListingClick={this.props.handleListingClick} key={index}  contactDisplay={contact.address} resultsId={index}  />
        ))
      break
      case 'phoneNumber':
        contactItems = this.props.people.map((contact, index) => (
          <Listing handleListingClick={this.props.handleListingClick} key={index} contactDisplay={contact.phoneNumber}  resultsId={index}  />
          
        ))
      break
      default:
        contactItems = this.props.people.map((contact, index) => {
          const name = `${contact.firstName} ${contact.lastName}`
          return (
          <Listing handleListingClick={this.props.handleListingClick} key={index}  contactDisplay={name} resultsId={index}  />
        )}
      )
              
    }

    
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
