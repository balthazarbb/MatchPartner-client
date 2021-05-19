import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import {Link} from 'react-router-dom'

function Navbar(props) {
    const {user ,onLogout} = props
    return(
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start"  color="inherit" aria-label="menu">
                    
                </IconButton>
                    <Typography >
                         <h1>MatchPartner</h1>
                    </Typography>
                {   
                user ? (                    
                    <Button onClick={onLogout}>Logout</Button>               
                ) : (
                  <>
                    <Link  style={{marginLeft: '10px'}}  to="/signup">SignUp</Link>
                    <Link  style={{marginLeft: '10px'}}  to="/signin">LogIn</Link>
                  </>  
                )
                }
            </Toolbar>
        </AppBar>
    )
}
export default Navbar



