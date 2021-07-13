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
		<div >
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