import React, {Component} from 'react'
import Listings from '../components/listings'
import SearchInput from '../components/searchInput'
import Fuse from 'fuse.js'
import { Segment,Dimmer, Loader } from 'semantic-ui-react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {fetchPeople, selectPerson} from '../actions/peopleActions'
import {List as VirtualList, AutoSizer} from 'react-virtualized';

class Sidebar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      searchInput: '',
      results: this.props.people
    }
    this.handleListingClick = this.handleListingClick.bind(this)

  }

  componentDidUpdate = (prevProps, prevState) => {
    if ( this.state.results.length === 0 && this.state.searchInput === '' ) {
      this.setState( {results: this.props.people})
    }

    if (prevProps.activeNavbarItem !== this.props.activeNavbarItem) {
      this.setState({searchInput: '', results: this.props.people})
    }
  }

  


  handleSearchInput = (event) => {
    this.setState({searchInput: event.target.value}, (props) => {

      let queryKeys 
      if(this.props.activeNavbarItem !== 'phoneNumber' && this.props.activeNavbarItem !== 'address'){
        queryKeys = ['firstName', 'lastName']
      } else {
        queryKeys = [this.props.activeNavbarItem]
      }

    const options = {
      keys: queryKeys,
      minMatchCharLength: 3,
      shouldSort: true,
      threshold: 0.2
     }
     
    const fuse = new Fuse(this.props.people, options)
    const results = fuse.search(this.state.searchInput)
    this.setState({results}) 
    })
  }

  handleListingClick = (event, t) => {

    
    const personIndex = event.target.id || event.target.children[0].children[0].id
    const person = this.state.results[personIndex]
    
    this.props.selectPerson(person)
}

  

  render() {
    return (
    <Segment  floated='left' style={{ width: '19%', height: '93vh' , padding: '0px', marginTop: '0px', marginBottom: '0px'}} >

      <SearchInput handleSearchInput={this.handleSearchInput} searchValue={this.state.searchInput}  />
      <AutoSizer>
        {({height, width}) => (
            <VirtualList
            height={height}
            rowHeight={35}
            
            rowRenderer={({ index, key, style }) => {
            const person = this.props.people[index]
              return (<div 
                key={key} style={style}>  {person.lastName} {person.firstName} </div>)}
          }
            width={width}
            rowCount={this.props.people.length}
          />

        )}
        </AutoSizer>

    </Segment>

  )}
}

 const mapDispatchToProps = dispatch => (
   bindActionCreators({fetchPeople, selectPerson}, dispatch)
 )

 const mapStateToProps = state => {
  return(
   {people: state.people, activeNavbarItem: state.activeNavbarItem}
 )}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
// isEmptySearchInput={this.state.searchInput === ''}
//      <Listings  handleListingClick={this.handleListingClick} people={this.state.results}  queryBy={this.props.activeNavbarItem} />
