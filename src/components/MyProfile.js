import React from "react"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import AllMatches from "./AllMatches"
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom'
const useStyles = makeStyles({
  root: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function MyProfile(props) {
  const { onAdd, matches, onDelete, user, handleMatchChange } = props;  
  const classes = useStyles();


  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    }}>
      
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography className={classes.root} color="textSecondary" gutterBottom>
            <h2>Welcome back {user.username}</h2>
          </Typography>
          <Avatar className={classes.root} src="/broken-image.jpg" />
          <Typography className={classes.root}  color="textSecondary">
          </Typography>
          <Typography className={classes.root} variant="body2" component="p">
            <br />
            {'"Get up and do sports!"'}
          </Typography>
        </CardContent>
        <CardActions></CardActions>
      </Card>
      <Link to="/add-form">Add Match</Link>
      <Button size="small"></Button>
      <AllMatches onAdd={onAdd} matches={matches} onDelete={onDelete} onChange={handleMatchChange}/>
    </div>
  );
}

export default MyProfile;
