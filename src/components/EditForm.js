import axios from 'axios'
import React, { Component } from 'react'
import config from '../config'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import MatchesDetail from './MatchesDetail'

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
		let newMatch = event.target.value
        
		const { matches } = this.state
		let clonedMatches = JSON.parse(JSON.stringify(matches))

		clonedMatches.sports = newMatch

		this.setState({
			matches: clonedMatches
		})
	}

    handleDateAndTimeChange = (event) => {
		let newMatch = event.target.value
        
		const { matches } = this.state
		let clonedMatches = JSON.parse(JSON.stringify(matches))

		clonedMatches.dateAndTime = newMatch

		this.setState({
			matches: clonedMatches
		})
	}

    handleDurationChange = (event) => {
		let newMatch = event.target.value
        
		const { matches } = this.state
		let clonedMatches = JSON.parse(JSON.stringify(matches))

		clonedMatches.duration = newMatch

		this.setState({
			matches: clonedMatches
		})
	}
    
    handleNumberOfParticipantsChange = (event) => {
		let newMatch = event.target.value
        
		const { matches } = this.state
		let clonedMatches = JSON.parse(JSON.stringify(matches))

		clonedMatches.numberOfParticipants = newMatch

		this.setState({
			matches: clonedMatches
		})
	}

    handleEquipmentChange = (event) => {
		let newMatch = event.target.value
        
		const { matches } = this.state
		let clonedMatches = JSON.parse(JSON.stringify(matches))

		clonedMatches.equipment = newMatch

		this.setState({
			matches: clonedMatches
		})
	}
	/*
    state = {
        match: {}
    }

    fetchDetails = () => {
        let matchId = this.props.match.params.matchId
        axios.get(`${config.API_URL}/api/matches/${matchId}`)
        .then((response) => {
            this.setState({match: response.data})
        })
        .catch((err) => {
            console.log('Fetch failed')
        });
    }





    componentDidMount(){
        this.fetchDetails()
    }
    
    componentDidUpdate (prevProps) {
        if(prevProps.comments !== this.props.comments){
            this.fetchDetails()
        }
    }
*/
	/*               <input  type="text" value={matches.sports}/>
                <input name="equipment" type="text" onChange={this.handleMatchChange} value={matches.equipment}></input>
                <input name="dateAndTime" type="number" onChange={this.handleMatchChange} value={matches.dateAndTime}/>
                <input name="duration" type="number" onChange={this.handleMatchChange} value={matches.duration}/>
                <input name="numberOfParticipants" type="number" onChange={this.handleMatchChange} value={matches.numberOfParticipants}/> */

	/*
                <form onSubmit={(event) => { onEdit(event, matches) } }>

                </form> 

*/
	render() {
		const { matches } = this.state
		const { onEdit } = this.props

		return (
			<div>
				<h3>Edit in here</h3>
				<input onChange={this.handleSportsChange} type="text" value={matches.sports} />
				<input onChange={this.handleDateAndTimeChange} type="text" value={matches.dateAndTime} />
				<input onChange={this.handleDurationChange} type="text" value={matches.duration} />
				<input onChange={this.handleNumberOfParticipantsChange} type="text" value={matches.numberOfParticipants} />
				<input onChange={this.handleEquipmentChange} type="text" value={matches.equipment} />
				<button onClick={() => {onEdit (matches)}} >Edit</button>
			</div>
		)
	}
}

export default EditForm