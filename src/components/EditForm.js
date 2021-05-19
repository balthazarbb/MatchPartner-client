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
            this.setState({match: response.data})
        })
        .catch((err) => {
            console.log('Fetch failed')
        });
    }

    handleMatchChange = (event) => {
        let {name, value} = event.target
        this.setState({
            [name]: value
        })
    }



    render() {
        const {match} = this.state
        const {onEdit} = this.props

        return (
        <div>
        <form onSubmit={(event) => { onEdit(event, match) } }>
            <input name="sports" type="text" onChange={this.handleMatchChange} value={match.sports}/>
            
            <button>Edit</button>
        </form>  
        </div>
            
        )
    }
}

export default EditForm


/*
<input name="equipment" type="text" onChange={this.handleMatchChange} value={match.equipment}></input>
 */