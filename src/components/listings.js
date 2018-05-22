import React from 'react'
import Listing from './listing'
import {List} from 'semantic-ui-react'
import listStyle from '../semantic/out/components/list.css'
import {List as VirtualList, AutoSizer} from 'react-virtualized';
import 'react-virtualized/styles.css';



class Listings extends React.Component {

  constructor(props) {
    super(props)

    
  }


  render(){
    
    //let contactItems
    let displayAttributes = [this.props.queryBy]
    if (this.props.queryBy === 'name' || this.props.queryBy === 'home') {
      displayAttributes = ['lastName', 'firstName']
    }
    
  return (
      <AutoSizer>
        {({height, width}) => (
            <VirtualList
            height={height}
            rowHeight={35}
            rowRenderer={({ index, key, style }) => {
            const person = this.props.people[index]
              return (<div 
                key={key} className='listing-row' style={style} onClick={this.handleListingClick} id={index}  >  {person[displayAttributes[0]]} { displayAttributes.length > 1 &&  person[displayAttributes[1]]}   </div>)
              }
          }
            width={width}
            rowCount={this.props.people.length}
          />

        )}
        </AutoSizer> 
    )
  }
}

export default Listings
