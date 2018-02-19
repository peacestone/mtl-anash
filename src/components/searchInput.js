import React from 'react'
import {Segment, Input, Button} from 'semantic-ui-react'



const SearchInput = (props) => {
  return(
    <Input focus onChange={props.handleSearchInput} value={props.searchValue} placeholder='Search...' />

  )
}


export default SearchInput
