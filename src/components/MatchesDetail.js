import axios from 'axios'
import React, { Component } from 'react'
import config from "../config"
import {Redirect} from 'react-router-dom'
import AddComment from './AddComment'
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'

class MatchesDetail extends Component {
    
    state={
        matches: null  
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


        const {onAdd, onCom, user, comments}= this.props
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

                <Card style={{ width: '18rem' }}>

                    <ListGroup variant="flush">
                    <ListGroup.Item>What: {matches.sports}</ListGroup.Item>
                    <ListGroup.Item>When: {matches.dateAndTime}</ListGroup.Item>
                    <ListGroup.Item>How long:{matches.duration}</ListGroup.Item>
                    <ListGroup.Item>Participants{matches.numberOfParticipants}</ListGroup.Item>
                    <ListGroup.Item>Bring: {matches.equipment}</ListGroup.Item>

                    </ListGroup>
                </Card>


                <button onClick={()=> {onAdd(matches._id)}}>Join</button>

                <AddComment onCom={onCom} comments={comments}  matchId={matches._id} />
                  <div> Comments: </div>


                {
                    matches.commentId.map((comment)=>{
                        console.log(matches)
                        return <li key={comment._id}> {comment.comment}</li>      
                    })
                }

                {
                    matches.userId.map((user)=>{
                        console.log(matches)
                        return <p key={user._id}>Who joins: {user.username}</p>      
                    })
                }
                        
            </div>
        )
    }
}

export default MatchesDetail
