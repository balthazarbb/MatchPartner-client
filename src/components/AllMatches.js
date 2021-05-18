import React, { Component } from 'react'
import axios from 'axios'
import config from "../config"
import { Link } from 'react-router-dom'
//import Modal from './Modal'
import AddForm from './AddForm'

class AllMatches extends Component {
 

    render() {
        const {onAdd, onDelete, matches} = this.props
        return (
            <div>
               <h1>Matchlist</h1>

               <AddForm onAdd={onAdd} />


               {
                    matches.map((match)=>{
                        return <div key={match._id}>    
                        <Link to={`/matches/${match._id}`}>{match.sports}</Link>
                            <button>edit</button>
                            <button onClick={()=> {onDelete(match._id)}}>delete</button>
                        </div>
                    })
                }
                
            </div>
        )
    }
}

export default AllMatches


/*

                 <button onClick={()=> {onDelete(matches)}}>delete</button> 
*/ 

