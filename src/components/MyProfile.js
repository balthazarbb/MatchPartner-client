import React from "react"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import AllMatches from "./AllMatches"

function MyProfile(props) {
  const { onAdd, matches, onDelete, user, handleMatchChange } = props;

  return (
    <div>
      <Card variant="outlined">
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            <h2>Welcome {user.username}</h2>
          </Typography>
          <Typography color="textSecondary">
            insert img here somewhen
          </Typography>
          <Typography variant="body2" component="p">
            go one step further
            <br />
            {'"Get up and do sports!"'}
          </Typography>
        </CardContent>
        <CardActions></CardActions>
      </Card>
      <Button size="small"></Button>
      <AllMatches onAdd={onAdd} matches={matches} onDelete={onDelete} onChange={handleMatchChange}/>
    </div>
  );
}

export default MyProfile;
