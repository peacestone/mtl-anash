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
    this.state = {
      searchInput: '',
      results: []
    }

  }

  componentDidMount = () => {
    this.props.fetchPeople()
  }

  componentDidUpdate = () => {
   if (this.state.results.length === 0) {
      this.setState({results: this.props.people})
   }
  }


  handleSearchInput = (event) => { 
    this.setState({searchInput: event.target.value}, (props) => {

    const options = {
      keys: ['firstName', 'lastName'],
      minMatchCharLength: 3,
      shouldSort: true,
      threshold: 0.6
     }
     
    const fuse = new Fuse(this.props.people, options)
    const results = fuse.search(this.state.searchInput)
    this.setState({results}) 
    }
  )
}

  

  render() {
    if (this.props.people.length === 0) {
      return (
        <h1 style={{fontSize: "5em"}}>Hang On Tight </h1>
      )
    }
    
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

 const mapStateToProps = state => (
   {people: state.people}
 )

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
