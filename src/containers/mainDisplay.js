import React from 'react' 
import {connect} from 'react-redux'
import ListingDetails from '../components/listingDetails'
import {Container} from 'semantic-ui-react';
import UpdateListingInput from './updateListingInput'
import SearchMainDisplay from './searchMainDisplay'

class MainDisplay extends React.Component {
    
    
    render(){

     if(this.props.activeNavbarItem === 'updateListing'){
        return (
            <div>
                <h1> Search for a listing to update</h1>
                <UpdateListingInput />
            </div>
        )
    }
    else if(this.props.activeNavbarItem === 'phoneNumber'){
        return (
            <SearchMainDisplay  selectedPerson={this.props.selectedPerson} message='Search for a person by entering a phone number'/>
        )
    }
    else if(this.props.activeNavbarItem === 'address'){
        return (
            <SearchMainDisplay selectedPerson={this.props.selectedPerson} message='Search for a person by entering an address'
            />
        )
    }
    else if(this.props.activeNavbarItem === 'name'){
        return (
            <SearchMainDisplay selectedPerson={this.props.selectedPerson} message='Search for a person by entering a name'
            />
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