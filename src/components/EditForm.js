import axios from 'axios'
import React, { Component } from 'react'
import config from '../config'



class EditForm extends Component {

    state = {
        match: {}
    }

    componentDidMount(){
        let matchId = this.props.match.params.matchId
        axios.get(`${config.API_URL}/api/matches/${matchId}`)
        .then((response) => {
            this.setState({
                match: response.data
            })
        }).catch((err) => {
            console.log('Fetch failed')
        });
    }

    handleSportsChange = (event) => {
        let text = event.target.value
        console.log(text)
        let cloneMatch = JSON.parse(JSON.stringify(this.state.match))
        cloneMatch.sports = text

        this.setState({
            match: cloneMatch
        })
    }

    render() {
        const {match} = this.state
        const {onEdit} = this.props

        return (
            <div>
                <input type="text" onChange={this.handleSportsChange} value={match.sports}/>
                <button onClick={ () => { onEdit(match) } }  >Edit</button>
                
            </div>
        )
    }
}

export default EditForm