import React from 'react'
import {Segment, Input, Button} from 'semantic-ui-react'



const SearchInput = (props) => {
  return(
    <div>

    <div style={{width: '35%', backgroundColor: 'aqua'}}>
      <input type='text' />
    </div>

    <Segment  style={{width: '35%'}} >
      <label><strong>Who?</strong></label><br />
      <Input   />
      <div>
        <Button style={{margin: '50px'}} floated='right'>Search</Button>
      </div>
      <input />
    </Segment>


    </div>



  )
}


export default SearchInput
