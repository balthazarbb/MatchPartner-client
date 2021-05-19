import React from "react";
import { Link, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AllMatches from "./AllMatches";

import Modal from "./AddForm";

function MyProfile(props) {
  const { username, onAdd, matches, onDelete, user, handleMatchChange } = props;

  return (
    <div>
      <Card variant="outlined">
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            <h2>Hi, {user.username}</h2>
          </Typography>
          <Typography color="textSecondary">
            insert img here somewhen
          </Typography>
          <Typography variant="body2" component="p">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
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
