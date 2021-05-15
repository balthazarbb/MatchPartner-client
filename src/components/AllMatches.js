import React, { Component } from 'react'
import axios from 'axios'
import config from "../config"

class AllMatches extends Component {
state = {
    matches:[]
}

componentDidMount(){
    axios.get(`${config.API_URL}/api/matches`)
    .then((response) => {
      this.setState({matches: response.data})
      
    }).catch((err) => {
      
    });
} 

    render() {
        const {matches}  = this.state
        return (
            <div>
                <h1>Matchlist</h1>

                {
                    matches.map((match)=>{
                        return <div>{match.sports}</div>
                    })
                }

            </div>
        )
    }
}

export default AllMatches


/*

*/