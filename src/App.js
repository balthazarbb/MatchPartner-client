import React, { Component } from 'react'
import { Switch, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import SignUp from "./components/SignUp"
import SignIn from "./components/SignIn"


class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={HomePage} />
        <Route  path="/signup"  render={(routeProps) => {
	        return  <SignUp {...routeProps}  />
        }}/>
        <Route  path="/signin"  render={(routeProps) => {
	        return  <SignIn {...routeProps}  />
        }}/>
      </div>
    )
  }
}

export default App