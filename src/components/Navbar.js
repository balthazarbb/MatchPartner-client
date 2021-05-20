import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Navbar(props) {
    const {user ,onLogout} = props
    const classes = useStyles();

    return(
        <div className={classes.root}>
        <AppBar color="default" position="static">
            <Toolbar>
                <IconButton   color="inherit" aria-label="menu"> 
                </IconButton>
                    <Typography >
                         <img width="90" height="80" padding="5px" src={"https://res.cloudinary.com/dg3rhmvdt/image/upload/v1621518135/IMG_1098_isniex.png"} alt="logo"/>
                    </Typography>
                    <h3>MatchPartner</h3>
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
        </div>
    )
}
export default Navbar
