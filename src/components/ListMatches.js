import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
//import { makeStyles } from '@material-ui/core/styles'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import {Link} from 'react-router-dom'



class ListMatches extends Component {
  
    render(props) {
     const {matches} = this.props
        return (
            <div>
              <h2>All available matches</h2>

                <ListItem >

              {
                  matches.map((match)=>{
                      return <div>
                      <Link to={`/matches/${match._id}`}>{match.sports}</Link>
                      </div>
                  })
              }    
              </ListItem> 
                  
            </div>
            
        )
    }
}

export default ListMatches
