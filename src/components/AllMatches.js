import React, { Component } from 'react'
import axios from 'axios'
import config from "../config"
import { Link } from 'react-router-dom'
//import Modal from './Modal'
import AddForm from './AddForm'

class AllMatches extends Component {
state = {
    matches:[]
}

componentDidMount(){
    axios.get(`${config.API_URL}/api/matches`)
    .then((response) => {
      this.setState({matches: response.data})
      
    })
    .catch((err) => {
      
    });
} 

    render() {
        const {matches}  = this.state
        const {onAdd} = this.props
        return (
            <div>
               <h1>Matchlist</h1>

            <AddForm onAdd={onAdd} />


               {
                    matches.map((match)=>{
                        return <div key={match._id}>
                        <Link to={`/matches/${match._id}`}>{match.sports}</Link>
                        <button>edit</button>
                        <button>delete</button>
                        </div>
                    })
                }


            </div>
        )
    }
}

export default AllMatches


/*
{
    matches.map((matches)=>{
        return <div>
        <Link to={`/matches/${matches._id}`}>{matches.name}</Link>
        </div>
    })
}
                 
*/ 

