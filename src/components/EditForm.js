import axios from 'axios'
import React, { Component } from 'react'
import config from '../config'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'


class EditForm extends Component {
	state = {
		matches: {},
	};

	componentDidMount() {
		console.log(this.props);
		let matchesId = this.props.match.params.matchesId;
		console.log(matchesId);
		axios
			.get(`${config.API_URL}/api/matches/${matchesId}`, { withCredentials: true })

			.then((response) => {
				console.log('inside of then block', response.data);
				this.setState({ matches: response.data });
			})
			.catch((err) => {
				console.log('detail view crashed');
			});
	}

	handleSportsChange = (event) => {
		let newSports = event.target.value
        
		const { matches } = this.state
		let cloneMatches = JSON.parse(JSON.stringify(matches))

		cloneMatches.sports = newSports

		this.setState({
			matches: cloneMatches
		})
	}

    handleDateAndTimeChange = (event) => {
		let newDate = event.target.value
        
		const { matches } = this.state
		let cloneMatches = JSON.parse(JSON.stringify(matches))

		cloneMatches.dateAndTime = newDate

		this.setState({
			matches: cloneMatches
		})
	}

    handleDurationChange = (event) => {
		let newDuration = event.target.value
        
		const { matches } = this.state
		let cloneMatches = JSON.parse(JSON.stringify(matches))

		cloneMatches.duration = newDuration

		this.setState({
			matches: cloneMatches
		})
	}
    
    handleNumberOfParticipantsChange = (event) => {
		let newPartici = event.target.value
        
		const { matches } = this.state
		let cloneMatches = JSON.parse(JSON.stringify(matches))

		cloneMatches.numberOfParticipants = newPartici

		this.setState({
			matches: cloneMatches
		})
	}

    handleEquipmentChange = (event) => {
		let newEquip = event.target.value
        
		const { matches } = this.state
		let cloneMatches = JSON.parse(JSON.stringify(matches))

		cloneMatches.equipment = newEquip

		this.setState({
			matches: cloneMatches
		})
	}

	render() {
		const { matches } = this.state
		const { onEdit } = this.props

		return (
			<div>
        	<h1>Edit your  Match</h1>
            <div className="form-group">
                
                <TextField onChange={this.handleSportsChange} type="text" value={matches.sports} id="outlined-basic InputUsername" label="Which Sport?" variant="outlined"  name="sports"/>
            </div>
            <div className="form-group">
                <TextField onChange={this.handleDateAndTimeChange} type="text" value={matches.dateAndTime} id="outlined-basic"  label="Date and Time?" variant="outlined"  name="dateAndTime"/>

            </div>
			<div className="form-group">
                <TextField onChange={this.handleDurationChange} type="text" value={matches.duration} id="outlined-basic"  label="Duration?" variant="outlined"  name="duration"/>

            </div>
			<div className="form-group">
                <TextField onChange={this.handleNumberOfParticipantsChange} type="text" value={matches.numberOfParticipants} id="outlined-basic"  label="How many?" variant="outlined"  name="numberOfParticipants"/>

            </div>
			<div className="form-group">
                <TextField onChange={this.handleEquipmentChange} type="text" value={matches.equipment} id="outlined-basic"  label="Equipment needed?" variant="outlined"  name="equipment"/>

            </div>
            <Button onClick={() => {onEdit (matches)}} variant="contained" color="primary">Edit Match</Button>
			</div>
		)
	}
}

export default EditForm



