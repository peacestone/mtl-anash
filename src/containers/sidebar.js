import React, {Component} from 'react'
import Listings from '../components/listings'
import SearchInput from '../components/searchInput'
import Fuse from 'fuse.js'
import Tab, { Segment, Container } from 'semantic-ui-react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {fetchPeople, selectPerson} from '../actions/peopleActions'

class Sidebar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      searchInput: '',
      results: []
    }
    this.handleListingClick = this.handleListingClick.bind(this)

  }

  componentDidMount = () => {
    this.props.fetchPeople()
  }

  componentDidUpdate = () => {
   if ( this.state.results.length === 0 && this.state.searchInput === '' ) {
      this.setState({results: this.props.people})
   }
  }


  handleSearchInput = (event) => { 
    this.setState({searchInput: event.target.value}, (props) => {

    const options = {
      keys: ['firstName', 'lastName'],
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
    if (this.props.people.length === 0) {
      return (
        <h1 style={{fontSize: "5em"}}>Hang On Tight </h1>
      )
    }
    
    return (
    <Segment floated='left' style={{ width: '260px',height: '95vh', overflowY: 'scroll', overflowX: 'visible', padding: '0px', marginTop: '0px'}} >
        <SearchInput handleSearchInput={this.handleSearchInput} searchValue={this.state.searchInput}  />
        <Listings  handleListingClick={this.handleListingClick} people={this.state.results} isEmptySearchInput={this.state.searchInput === ''} queryType={this.props.queryType} />
    </Segment>
  )}
}

 const mapDispatchToProps = dispatch => (
   bindActionCreators({fetchPeople, selectPerson}, dispatch)
 )

 const mapStateToProps = state => (
   {people: state.people, queryType: state.queryType}
 )

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
