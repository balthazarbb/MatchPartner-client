import axios from 'axios'
import React, { Component } from 'react'
import config from "../config"
import {Link, Redirect} from 'react-router-dom'
import EditForm from './EditForm'
import AddComment from './AddComment'


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


        const {onAdd, onCom, onDelete, user, match, comments}= this.props
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
                    matches.userId.map((user)=>{
                        console.log(matches)
                        return <li key={user._id}>Participants: {user.username}</li>      
                    })
                }

                {
                    matches.commentId.map((comment)=>{
                        console.log(matches)
                        return <li key={comment._id}>Comment: {comment.comment}</li>      
                    })
                }

                




                <button onClick={()=> {onAdd(matches._id)}}>Join</button>

                <AddComment onCom={onCom} comments={comments}  matchId={matches._id} />
                  <div> Comments: </div>
                        
            </div>
        )
    }
}

export default MatchesDetail

/*
                {               
                    comments.matchId.map((comments)=>{
                        console.log(comments)
                        return <li >Comments: {comments.comment}</li>   
                        
                    })
                }



                {
                    comments.map((comments) => {
                        return (
                        <div key={comments._id}>
                            <Link to={`/comments/${comments._id}`}>{comments.comments}</Link>
                        </div>
                        )
                    })
                }
*/ 


