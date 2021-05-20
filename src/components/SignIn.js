import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import CardContent from "@material-ui/core/CardContent"
import Card from '@material-ui/core/Card'



function SignIn(props){
    const{onSignIn, error} = props
    return (
    <Card>
      <CardContent>
        <form onSubmit={onSignIn}>
            <h1>LogIn</h1>
            <div className="form-group">
                <TextField  id="outlined-basic" label="Username" variant="outlined" id="InputUsername" name="username"/>
            </div>
            <div className="form-group">
                <TextField id="outlined-basic" type="password" label="Password" variant="outlined" id="InputPassword" name="password"/>
            </div>
            <Button type="submit" variant="contained" color="primary">LogIn</Button>
            {
                //if else
              error &&  (<p style ={{color: 'red'}}>{error.error}</p>)
            }
        </form>
        </CardContent>
    </Card>
        
    )
}

export default SignIn
