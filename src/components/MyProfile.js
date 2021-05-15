import React from 'react'
import {Link, Switch,} from 'react-router-dom'
import Navbar from './Navbar'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import AllMatches from './AllMatches'


//import { useSpring, animated } from 'react-spring/web.cjs'; // web.cjs is required for IE 11 support

import Modal from './Modal'




function MyProfile(props) {
    const {user} = props
     
        return (
            <div>  
              
              <Card  variant="outlined">
                <CardContent>
                    <Typography  color="textSecondary" gutterBottom>
                        <h2>Hi, {user.username}</h2>
                    </Typography>
                    <Typography  color="textSecondary">
                        insert img here somewhen
                    </Typography>
                    <Typography variant="body2" component="p">
                        well meaning and kindly.
                            <br />
                        {'"a benevolent smile"'}
                    </Typography>
                </CardContent>
                <CardActions>
                <Modal />
                </CardActions>
                </Card>
                <Button size="small"></Button>
                <AllMatches />

            
                

               

                
            </div>
        )
    
}

export default MyProfile


