import React from 'react'
import {Container, Menu} from 'semantic-ui-react'
import {queryBy, removeSelectedPerson} from '../actions/peopleActions'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'

class navBar extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            activeItem: ''
        }
    }

    handleNavBarClick = (event) => {
        this.setState({activeItem: event.target.id} )
    }

    componentDidUpdate = (prevState) => {
        const activeItem = this.state.activeItem
        
        if(prevState.activeItem !== activeItem ){
            this.props.queryBy(activeItem)
        }
    }


    render() {
        return (
            <Menu style={{ marginBottom: '0px'}}  fluid  size='large' >
                <Menu.Item name='MTL Anash'  header onMouseDown={() => this.props.removeSelectedPerson()} />
                <Menu.Item onClick={this.handleNavBarClick} id='name' name='Search By Name'active={this.state.activeItem === 'name'}/>
                <Menu.Item onClick={this.handleNavBarClick} id='phoneNumber' name='Search By Phone Number' active={this.state.activeItem === 'phoneNumber'} />
                <Menu.Item onClick={this.handleNavBarClick} id='address' name='Search By Address' active={this.state.activeItem === 'address'} />
                <Menu.Menu position='right' >
                    <Menu.Item onClick={this.handleNavBarClick} id= 'updateListing' name='Update a Listing' active={this.state.activeItem === 'updateListing'} />
                </Menu.Menu>

            </Menu>

    ) }
}

const mapDispatchToProps = dispatch => (
    bindActionCreators({queryBy, removeSelectedPerson}, dispatch)
)

const mapStateToProps = state => (
    {activeItem: state.queryBy}
)

export default connect(mapStateToProps, mapDispatchToProps)(navBar)