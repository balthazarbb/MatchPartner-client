import React, { Component } from  'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
    margin: theme.spacing(1),
    width: '25ch',
	position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    },
  },
}));

class AddForm extends Component {

	render() {
    const {onAdd} = this.props
	
		return (
			<form onSubmit={onAdd}>
				<TextField name="sports" type="text" id="filled-basic" label="Which Sport?" variant="filled" />
				<TextField name="dateAndTime" id="filled-basic" label="Date and Time?" variant="filled" />
				<TextField name="duration"id="filled-basic" label="Duration?" variant="filled" />
				<TextField name="numberOfParticipants"id="filled-basic" label="How many?" variant="filled" />
				<TextField name="equipment" id="filled-basic" label="Equipment needed?" variant="filled" />
				<Button type="submit" variant="contained" color="primary">Create Match</Button>
        
			</form>
		)
	}
}

export  default AddForm
