import React from 'react' 
import {connect} from 'react-redux'
import ListingDetails from '../components/listingDetails'
import {Container} from 'semantic-ui-react';

class MainDisplay extends React.Component {
    
    
    render(){

    if(this.props.selectedPerson.firstName !== '') {
        return  <ListingDetails  selectedPerson={this.props.selectedPerson} />
    }
    else if(this.props.activeNavbarItem === 'updateListing'){
        return (
            <h1> Search for a listing to update</h1>
        )
    }
    else if(this.props.activeNavbarItem === 'phoneNumber'){
        return (
            <h1> Search for a person by entering a phone number</h1>
        )
    }
    else if(this.props.activeNavbarItem === 'address'){
        return (
            <h1> Search for a person by entering an address</h1>
        )
    }
    else if(this.props.activeNavbarItem === 'name'){
        return (
            <h1> Search for a person by entering a name</h1>
        )
    }
        return (
            <Container  >
                <h1 style={{fontSize: '4em', textAlign: 'center'}}>Welcome to MTL Anash!</h1>
            </Container>
        )   
        }
}







const mapStateToProps = state => (
    {selectedPerson: state.selectedPerson, activeNavbarItem: state.activeNavbarItem}
)

export default connect(mapStateToProps)(MainDisplay)