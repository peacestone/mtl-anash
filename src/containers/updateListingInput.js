import React from 'react'
import {Input} from 'semantic-ui-react'
import {connect} from 'react-redux'



class updateListingInput extends React.Component {
    constructor(props){
		super(props)
		this.state = {
			input: this.props.selectedPerson
			}

	}
	
	
	componentWillReceiveProps = (nextProps) => {
		this.setState({input: nextProps.selectedPerson})
	}
		
	
	render() {
		return (
			<Input placeholder='First Name' value={this.state.input.firstName} />
		)
	}
	
}

const mapStateToProps = state => { return(
{selectedPerson: state.selectedPerson}
)}

export default connect(mapStateToProps)(updateListingInput)