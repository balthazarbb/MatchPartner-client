import React from 'react'
import {Link} from 'react-router-dom'
import Card from '@material-ui/core/Card'
import CardContent from "@material-ui/core/CardContent"
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  root: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    
  },
});

function HomePage(props) {
  const classes = useStyles();
  return (
    <div >
      
      <Card className={classes.root}>
      <h1>welcome to matchpartner</h1>
      <CardContent>
        <Link  style={{marginLeft: '10px'}}  to="/signup">SignUp</Link>
        <Link  style={{marginLeft: '10px'}}  to="/signin">LogIn</Link>
      </CardContent>
      </Card>
    </div>
  );
}

export default HomePage;
