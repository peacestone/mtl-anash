import React from 'react'
import Listing from './listing'
import {List} from 'semantic-ui-react'
//import listStyle from '../semantic/out/components/list.css'

import {List as VirtualList} from 'react-virtualized';




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
        //const name = `${contact.lastName} ${contact.firstName}`
        contactItems = (<VirtualList
        height={800}
        rowHeight={50}
        
        rowRenderer={({ index, key, listStyle }) => {
        const person = this.props.people[index]
         return (<Listing 
           key={key}  handleListingClick={this.props.handleListingClick} resultsId={index} contactDisplay={`${person.lastName} ${person.firstName}`} />)}
      }
        width={262}
        rowCount={this.props.people.length}
      />)

        // contactItems = this.props.people.map((contact, index) => {
        //   const name = `${contact.lastName} ${contact.firstName}`
        //   return (
        //   <Listing handleListingClick={this.props.handleListingClick} key={index}  contactDisplay={name} resultsId={index}  />
        // )}) 

                  
        }
        

    
  return (
    <div id='listings' >
      <List selection verticalAlign='middle' divided  >
        {contactItems }
      </List>
    </div>
    )
  }
}

export default Listings
