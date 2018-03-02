import React, {Component} from 'react'
import Listings from '../components/listings'
import SearchInput from '../components/searchInput'
import Fuse from 'fuse.js'
import {Segment, Container} from 'semantic-ui-react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {fetchPeople} from '../actions/peopleActions'

class Sidebar extends Component {

  constructor(props) {
    super(props)
    this.people = []
    this.state = {
      searchInput: '',
      results: []
    }

  }

  componentDidMount = () => this.props.fetchPeople()


  handleSearchInput = (event, test) => { 
    this.setState({searchInput: event.target.value}, (props) => {

    const options = {
      keys: ['firstName', 'lastName'],
      minMatchCharLength: 3,
      //tokenize: true,
      shouldSort: true,
      threshold: 0.6
     }
     
    const fuse = new Fuse(this.people, options)
    const results = this.state.searchInput === '' ? this.people : fuse.search(this.state.searchInput)
    this.setState({results}) 
    }
  )
}

  

  render() {
    
    return (
    <Segment floated='left' style={{ width: '260px'}} >
        <SearchInput handleSearchInput={this.handleSearchInput} searchValue={this.state.searchInput}  />
        <Listings people={this.state.results} isEmptySearchInput={this.state.searchInput === ''} />
    </Segment>
  )}
}

 const mapDispatchToProps = dispatch => (
   bindActionCreators({fetchPeople}, dispatch)
 )

export default connect(null, mapDispatchToProps)(Sidebar)
