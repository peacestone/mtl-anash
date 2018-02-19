import React, {Component} from 'react'
import Listings from '../components/listings'
import SearchInput from '../components/searchInput'

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
    this.setState({searchInput: event.target.value})
    const results = this.people.filter((person) => person.firstName.includes(this.state.searchInput) || person.lastName.includes(this.state.searchInput) )
    
    results[0] != null ? this.setState({results}) : this.setState({results: this.people})

}

  

  render() {
    console.log(this.state);
    
    return (
    <div id='sidebar' style={{margin: "1em"}}>
      <SearchInput handleSearchInput={this.handleSearchInput} searchValue={this.state.searchInput}  />
      <Listings people={this.state.results} />
    </div>
  )
}
}

export default Sidebar
