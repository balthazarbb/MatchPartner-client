import React, { Component } from "react"
import { Switch, Route, withRouter, Link } from "react-router-dom"
import HomePage from "./pages/HomePage"
import SignUp from "./components/SignUp"
import SignIn from "./components/SignIn"
import axios from "axios"
import config from "./config"
import MyProfile from "./components/MyProfile"
import Navbar from './components/Navbar'

class App extends Component {
  state = {
    user: null,
    error: null
  }

  handleSignUp = (e) => {
    e.preventDefault()
    let{username, password}=e.target
    let newUser = {
      username: username.value,
      password: password.value
    } 
    console.log(newUser)
    
    axios.post(`${config.API_URL}/api/signup`, newUser, {withCredentials: true})
    .then((response) => {
      //real data is always in response.data
      this.setState({
        //saving user to the state
        user: response.data
      }, () => {
        //redirecting to login after signin
        this.props.history.push('/signin')
      })
    })
    .catch((err) => {
      console.log(err)
    })
  }

  handleSignIn = async (e) => {
    e.preventDefault()
    const {username, password} = e.target
    let newUser = {
      username: username.value,
      password: password.value
    }

    axios.post(`${config.API_URL}/api/signin`, newUser, {withCredentials: true})
    .then((response) => {
      this.setState({
        user: response.data,
        error: null
      }, ()=>{
        this.props.history.push('/myprofile')
      })
    })
    .catch((errorObj) => {
      this.setState({
        error: errorObj.response.data
      })
    });
  }

  handleLogout = () => {
    axios.get(`${config.API_URL}/api/logout`, {withCredentials: true})
      .then(()=>{
        this.setState({
          user: null
        }, this.props.history.push('/'))
      })
      .catch((errorObj)=>{
        this.setState({
          error: errorObj.response.data
        })
      })
  }

  render() {
    const {error, username, user} = this.state
    return (
      <div>
      <div>
      <Navbar onLogout={this.handleLogout} user={username} error={error}/>
      </div>
      <Switch>
        
        <Route exact path="/" component={HomePage} user={username}/>
        <Route  path="/signup"  render={(routeProps) => {
	        return  <SignUp onSubmit={this.handleSignUp} {...routeProps}  />
        }}/>
        <Route  path="/signin"  render={(routeProps) => {
	        return  <SignIn error={error} onSignIn={this.handleSignIn} {...routeProps}  />
        }}/>
        <MyProfile  user={user}/>
        
       </Switch>
       
       
      </div>
    )
  }
}

export default withRouter(App)