import axios from 'axios'
import React, { Component } from 'react'
import config from "../config"


class MatchesDetail extends Component {
    
    state={
        matches: {}
    }
     

    componentDidMount(){
        console.log(this.props)
        let matchesId = this.props.match.params.matchesId
        console.log(matchesId)
        axios.get(`${config.API_URL}/api/matches/${matchesId}`, {withCredentials: true})
        
            .then((response) => {
                console.log('inside of then block', response.data)
                this.setState({matches: response.data}) 

            })
            .catch((err) => {
            console.log('detail view crashed')
            });
            
    } 

    render() { //wrong?
        console.log(this.props)
        const {matches} = this.state
        console.log(matches)
        return (

            <div>
                <h1>Match Details</h1>
                <div>{matches.user}</div>
                <div>{matches.sports}</div>
                <button>Join</button>
            </div>
        )
    }
}

export default MatchesDetail

/*

 */