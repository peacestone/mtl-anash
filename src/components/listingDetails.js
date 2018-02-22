import React from 'react'
import {Container} from 'semantic-ui-react'

const listingDetails = (props) => {


    return(
        <Container text style={{float: 'right', margin: "0 36.5%", fontSize: '2em'}}    >
            <h3>Tom Alpha</h3>
            <span>1234 Zulu St</span><br />
            <span>Anytown YP</span><br />
            <span>30000 USA</span>

        </Container>
    )
}

export default listingDetails