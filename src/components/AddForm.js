/*
import React, { Component } from  'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'


class AddForm extends Component {

	render() {
    const {onAdd} = this.props
	
		return (

			<div class='profile'>
			<form onSubmit={onAdd}>
				<TextField name="sports" type="text" id="filled-basic" label="Which Sport?" variant="filled" />
				<TextField name="dateAndTime" id="filled-basic" label="Date and Time?" variant="filled" />
				<TextField name="duration"id="filled-basic" label="Duration?" variant="filled" />
				<TextField name="numberOfParticipants" id="filled-basic" label="How many?" variant="filled" />
				<TextField name="equipment" id="filled-basic" label="Equipment needed?" variant="filled" />
				<Button type="submit" variant="contained" color="primary">Create Match</Button>
			</form>
			</div>
		)
	}
}

export  default AddForm
*/

import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import CardContent from "@material-ui/core/CardContent"
import Card from '@material-ui/core/Card'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  root: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    
  },
});

function AddForm(props){
					
    const {onAdd} = props
    const classes = useStyles();
    return (
    <Card className={classes.root}>
        <CardContent>
		<div class='profile'>
        <form onSubmit={onAdd}>
        <h1>Create a new Match</h1>
            <div className="form-group">
                
                <TextField  id="outlined-basic InputUsername" label="Which Sport?" variant="outlined"  name="sports"/>
            </div>
            <div className="form-group">
                <TextField id="outlined-basic"  label="Date and Time?" variant="outlined"  name="dateAndTime"/>

            </div>
			<div className="form-group">
                <TextField id="outlined-basic"  label="Duration?" variant="outlined"  name="duration"/>

            </div>
			<div className="form-group">
                <TextField id="outlined-basic"  label="How many?" variant="outlined"  name="numberOfParticipants"/>

            </div>
			<div className="form-group">
                <TextField id="outlined-basic"  label="Equipment needed?" variant="outlined"  name="equipment"/>

            </div>
            <Button type="submit" variant="contained" color="primary">Create Match</Button>
        </form>
		</div>
        </CardContent>
    </Card>



    )
}
export default AddForm