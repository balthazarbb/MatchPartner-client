import axios from 'axios'
import React, { Component } from 'react'
import config from "../config"
import {Link, Redirect} from 'react-router-dom'
import EditForm from './EditForm'



class MatchesDetail extends Component {
    
    state={
        matches: null,
        
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

    render() { 
        console.log(this.props)
        const {matches} = this.state

        const {onAdd, user, match}= this.props
        console.log(matches)

        if(!user ){
            return <Redirect to={'/signin'} />
          }
        
        if(!matches){
            return <p>Loading . . .</p>
        }

        return (

            <div>
                <h1>Match Details</h1>
                <div>{matches.sports}</div>
                <div>{matches.username}</div>

                
                {
                    matches.userId.map((match)=>{
                        console.log(matches)
                        return <li >Participants: {match.username}</li>   
                        
                    })
                }
                
                <button onClick={()=> {onAdd(matches._id)}}>Join</button>
                            
                
             

                    
                


            </div>
        )
    }
}

export default MatchesDetail

/*
<div to={`/matches/${match._id}`}>{match.sports}</div>
 */