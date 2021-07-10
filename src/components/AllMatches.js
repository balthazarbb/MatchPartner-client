import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AddForm from './AddForm'
import { makeStyles } from '@material-ui/core/styles'
import ListItem from '@material-ui/core/ListItem'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 400,
    maxWidth: 300,
    backgroundColor: theme.palette.background.paper,
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

class AllMatches extends Component {
 
    render(props) {
        const {onAdd, onDelete, matches, index, style, onChange} = this.props
        return (
            <div>
               <h2>My Matches</h2>

                <ListItem button style={style} key={index}>
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
                </ListItem>
            </div>
        )
    }
}

export default AllMatches

 

