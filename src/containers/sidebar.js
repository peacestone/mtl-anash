import React, {Component} from 'react'
import Listings from '../components/listings'
import SearchInput from '../components/searchInput'
import Fuse from 'fuse.js'

class Sidebar extends Component {

  constructor(props) {
    super(props)
    this.people = [{firstName: 'roger', lastName: 'albertson'}, {firstName: 'Tim', lastName: 'wahsington'}, {firstName: "chani", lastName: 'steinmetz'} ]
    this.state = {
      searchInput: '',
      results: this.people
    }

  }

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
    <div id='sidebar' style={{margin: "1em"}}>
      <SearchInput handleSearchInput={this.handleSearchInput} searchValue={this.state.searchInput}  />
      <Listings people={this.state.results} isEmptySearchInput={this.state.searchInput === ''} />
    </div>
  )
}
}

export default Sidebar
