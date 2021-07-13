import React, { Component } from 'react'
//import { makeStyles } from '@material-ui/core/styles'
import {Link} from 'react-router-dom'




class ListMatches extends Component {
  
    render(props) {
     const {matches} = this.props
        return (
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
            }}> 
              <h2>All matches</h2>
              <br />
              
            <ul >
              {
                  matches.map((match)=>{
                      return <div>
                      <Link to={`/matches/${match._id}`}>{match.sports}</Link>
                      </div>
                  })
              }    
            </ul> 


            </div>
                  
            
            
            
        )
    }
}

export default ListMatches




