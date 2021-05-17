import axios from 'axios'
import React, { Component } from 'react'
//import config from "./config"


class MatchesDetail extends Component {
    
    state={
        match: {}
    }
     
/*
    componentDidMount(){
        let matchesId = this.props.match.params.matchesId
        axios.get(`${config.API_URL}/api/matches/${matchesId}`, {withCredentials: true})
            .then((response) => {
                this.setState({matchesDetail: response.data}) 
            })
            .catch((err) => {
            console.log('detail view crashed')
            });
            
    } 
*/

    render() { //wrong?
        const {match} = this.state
        return (
            <div>
                <h1>Match Details</h1>
                <div>{match.username}</div>
                <div>{match.sports}</div>
                <button>Join</button>
            </div>
        )
    }
}

export default MatchesDetail

