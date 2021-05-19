import React from 'react';
//import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

function SignUp(props){
    const {onSubmit} = props
    return (
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="InputUsername">Username</label>
                <input type="text" className="form-control" id="InputUsername" name="username" />
            </div>
            <div className="form-group">
                <label htmlFor="InputPassword">Password</label>
                <input name="password" type="password" className="form-control" id="InputPassword" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>



    )
}

export default SignUp

/*
import React from 'react'
import { Form } from 'bootstrap';

 function SignUp(props){
     const {onSubmit} = props
     return (
        <form onSubmit={onSubmit}>
            <div class="mb-3">
                <label  class="form-label">Username</label>
                <input type="text" className="form-control" id="InputUsername" name="username"/>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" type="password" class="form-control" id="InputPassword"/>
         </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>

     )
 }

export default SignUp

*/



