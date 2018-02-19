import React, {Component} from 'react'
import Listings from '../components/listings'
import SearchInput from '../components/searchInput'

class Sidebar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      searchInput: ''
    }
  }

  handleSearchInput = (event) => this.setState({searchInput: event.target.value})

  

  render() {
    return (
    <div id='sidebar' style={{margin: "1em"}}>
      <SearchInput handleSearchInput={this.handleSearchInput} searchValue={this.state.searchInput}  />
      <Listings />
    </div>
  )
}
}

export default Sidebar
