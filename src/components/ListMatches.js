import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText';
//import { FixedSizeList } from 'react-window';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '40%',
    height: 500,
    maxWidth: 300,
    backgroundColor: theme.palette.background.paper,
  },
}));

class ListMatches extends Component {
  
    render(props) {
     const {matches} = this.props
        return (
            <div>
              <h2>All available matches</h2>

                <ListItem >

              {
                  matches.map((match)=>{
                      return <div>>
                      <Button to={`/matches/${match._id}`}>{match.sports}</Button>
                      </div>
                  })
              }    
              </ListItem> 
                  
            </div>
            
        )
    }
}

export default ListMatches
