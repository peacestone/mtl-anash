import React from 'react'
import {Container, Menu} from 'semantic-ui-react'

class navBar extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            activeItem: ''
        }
    }

    handleNavBarClick = (event) => this.setState({activeItem: event.target.id})


    render() {
        return (
            <Menu style={{ marginBottom: '0px'}}  fluid  size='large' >
                <Menu.Item name='MTL Anash'  header />
                <Menu.Item onClick={this.handleNavBarClick} id='name' name='Search By Name'active={this.state.activeItem === 'name'}/>
                <Menu.Item onClick={this.handleNavBarClick} id='phone' name='Search By Phone Number' active={this.state.activeItem === 'phone'} />
                <Menu.Item onClick={this.handleNavBarClick} id='address' name='Search By Address' active={this.state.activeItem === 'address'} />
                <Menu.Item onClick={this.handleNavBarClick} id= 'updateListing' name='Update a Listing' active={this.state.activeItem === 'updateListing'} />

            </Menu>

    ) }
}

export default navBar