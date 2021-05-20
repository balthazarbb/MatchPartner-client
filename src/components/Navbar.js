import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import {Link} from 'react-router-dom'

function Navbar(props) {
    const {user ,onLogout} = props
    return(
        <AppBar color="default" position="static">
            <Toolbar>
                <IconButton edge="start"  color="inherit" aria-label="menu">
                    
                </IconButton>
                    <Typography >
                         <h1>MatchPartner</h1>
                    </Typography>
                {   
                user ? (     
                    <>               
                    <Button onClick={onLogout}>Logout</Button>       
                    <Link  style={{marginLeft: '10px'}}  to="/list">AllMatches</Link>
                    <Link  style={{marginLeft: '10px'}}  to="/profile">MyProfile</Link>
                    </>   
                ) : (
                  <>
                    <Link  style={{marginLeft: '10px'}}  to="/signin">LogIn</Link>
 

                  </>  
                )
                }
            </Toolbar>
        </AppBar>
    )
}
export default Navbar
