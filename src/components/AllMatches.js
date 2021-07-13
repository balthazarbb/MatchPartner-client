import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'



class AllMatches extends Component {
 
    render(props) {
        const {onDelete, matches, index, style} = this.props;
        return (
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
            }}>
               <h2>My Matches</h2>
                <ul
                 button style={style} key={index}>
               {
                    matches.map((match)=>{
                        return <div key={match._id}>    
                        <Link to={`/matches/${match._id}`}>{match.sports}</Link>
                            
                            <Button size="small" variant="contained" color="primary" href="#contained-buttons">
                                <Link to={`/matches/${match._id}/edit`}> Edit </Link>
                            </Button>

                            <Button size="small" onClick={()=> {onDelete(match._id)}} variant="contained" color="primary" href="#contained-buttons">Delete</Button>
                        </div>
                    })
                }
                
                </ul>
            </div>
        )
    }
}

export default AllMatches

 

