import React, { Component } from "react"
import { Switch, Route, withRouter } from "react-router-dom"
import HomePage from "./pages/HomePage"
import SignUp from "./components/SignUp"
import SignIn from "./components/SignIn"
import axios from "axios"
import config from "./config"


class App extends Component {
  state = {
    user: null
  }

  handleSignUp = (e) => {
    e.preventDefault()
    let{username, password}=e.target
    let newUser = {
      username: username.value,
      password: password.value
    } 
    console.log(newUser)
    
    axios.post(`${config.API_URL}/api/signup`, newUser)
    .then((response) => {
      this.setState({
        user: response.data
      }, () => {
        this.props.history.push('/signin')
      })
    })
    .catch((err) => {
      console.log(err)
    })
  }

  render() {
    return (
      <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route  path="/signup"  render={(routeProps) => {
	        return  <SignUp onSubmit={this.handleSignUp} {...routeProps}  />
        }}/>
        <Route  path="/signin"  render={(routeProps) => {
	        return  <SignIn {...routeProps}  />
        }}/>
       </Switch>
      </div>
    )
  }
}

export default withRouter(App)