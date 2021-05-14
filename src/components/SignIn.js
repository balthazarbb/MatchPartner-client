import React from 'react'

function SignIn(props){
    const{onSignIn, error} = props
    return (
        <form onSubmit={onSignIn}>
        <h1>SignIn</h1>
            <div className="form-group">
                <label htmlFor="InputUsername">Username</label>
                <input type="text" className="form-control" id="InputEmail" name="username" />
            </div>
            <div className="form-group">
                <label htmlFor="InputPassword">Password</label>
                <input name="password" type="password" className="form-control" id="InputPassword" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            {
             // error ? () : ('') //does the same as below
                //if else
              error &&  (<p style ={{color: 'red'}}>{error.error}</p>)
            }
        </form>
    )
}

export default SignIn