import React from 'react'
import {Link, Switch} from 'react-router-dom'
import Navbar from './Navbar'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';


function MyProfile(props) {
    const {user} = props
     
        return (
            <div>  

              
              <Card  variant="outlined">
                <CardContent>
                <Typography variant="h5" component="h2">
                   <h2> Hi, {user.username}</h2>
                </Typography>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <Typography  color="textSecondary">
                    favourite sports
                </Typography>
                <Typography variant="body2" component="p">
                    well meaning and kindly.
                <br />
                
                </Typography>
                </CardContent>
                <CardActions>
                <Button size="small">create your new match!!</Button>
                </CardActions>
                </Card>
                
            </div>
        )
    
}

export default MyProfile
