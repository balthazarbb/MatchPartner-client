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

function SignUp(props){
    const {onSubmit} = props
    const classes = useStyles();
    return (
    <Card className={classes.root}>
        <CardContent>
        <form onSubmit={onSubmit}>
        <h1>SignUp</h1>
            <div className="form-group">
                
                <TextField  id="outlined-basic" label="Username" variant="outlined" id="InputUsername" name="username"/>
            </div>
            <div className="form-group">
                <TextField id="outlined-basic" type="password" label="Password" variant="outlined" id="InputPassword" name="password"/>

            </div>
            <Button type="submit" variant="contained" color="primary">Submit</Button>
        </form>
        </CardContent>
    </Card>



    )
}
export default SignUp
