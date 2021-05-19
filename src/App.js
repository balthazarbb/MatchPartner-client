import React, { Component } from "react"
import { Switch, Route, withRouter, Link } from "react-router-dom"
import HomePage from "./pages/HomePage"
import SignUp from "./components/SignUp"
import SignIn from "./components/SignIn"
import axios from "axios"
import config from "./config"
import MyProfile from "./components/MyProfile"
import Navbar from './components/Navbar'
import CircularProgress from '@material-ui/core/CircularProgress';
import AllMatches from "./components/AllMatches"
import MatchesDetail from "./components/MatchesDetail"
import AddForm from './components/AddForm'
import ListMatches from "./components/ListMatches"

class App extends Component {
  state = {
    user: null,
    error: null,
    fetchingUser: true,
    matches: []
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
        this.props.history.push('/profile')
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
  componentDidMount() {
    axios.get(`${config.API_URL}/api/matches`)
    .then((response) => {
      this.setState({matches: response.data})
      
    })
    .catch((err) => {
      
    });

    axios.get(`${config.API_URL}/api/user`, {withCredentials: true}) 
    .then((response) => {
      this.setState({ 
        user: response.data,
        fetchingUser: false,
      })
    })
    .catch((errorObj) => {
      this.setState({
        error: errorObj.data,
        fetchingUser: false,
      })
    })    
  }


  handleJoin = (matchId) => {
    console.log(matchId)
    axios.patch(`${config.API_URL}/api/matchespart/${matchId}`,{}, {withCredentials: true})

    .then((result) => {
      
    })
    .catch((err) => {
      
    });

  }

  handleAdd = (event) => {
    //update DB and the state
    event.preventDefault()
    let newMatch={
      sports: event.target.sports.value,
      username: event.target.username.value,
      completed: false
    }

    console.log('something')
    axios.post(`${config.API_URL}/api/create`, newMatch, {withCredentials: true})
    .then((result) => {
      this.setState({
         matches: [result.data, ...this.state.matches]
        }, () => {
          console.log(this.state.matches)
          this.props.history.push('/profile')
        })
    })
    .catch((err) => {
      console.log('add match fail')
    });

  }
/*
  handleAddComment = (event) => {
    //update DB and the state
    event.preventDefault()
    let newComment={
      user: event.target.user.value,
      myComment: event.target.myComment.value,
      completed: false
    }
    console.log(event)
    axios.post(`${config.API_URL}/api/createcomment`, newComment, {withCredentials: true})
    .then((result) => {
      this.setState({
         comments: [result.data, ...this.state.matches]
        }, () => {
          console.log(this.state.matches)
          this.props.history.push('/profile')
        })
    })
    .catch((err) => {
      console.log('add comment fail')
    });

  }

  */

  handleDelete = (matches)=>{
      axios.delete(`${config.API_URL}/api/matches/${matches}`, {withCredentials: true})
      .then(() => {
        console.log('DELETING')
        let filterMatches = this.state.matches.filter((match)=>{
          return match._id !== matches
        })
        this.setState({
          matches: filterMatches
        }, ()=>{
          this.props.history.push('/profile')
        })
      })
      .catch((err) => {
        console.log('delete not working')
      });
  }

  render() {               
    const {error, username, user, fetchingUser, matches} = this.state

    if(fetchingUser){
      return <p>Loading . . . </p>
    }

    return (
      <div>
      <div>
      <Navbar onLogout={this.handleLogout} user={username} error={error} />

      </div>
      
      <Switch>
        
        <Route exact path="/" component={HomePage} user={user}/>

        <Route  path="/list"  render={(routeProps) => {
	        return  <ListMatches  matches={matches}  />
        }}/>

        <Route  path="/signup"  render={(routeProps) => {
	        return  <SignUp onSubmit={this.handleSignUp} {...routeProps}  />
        }}/>
        <Route  path="/signin"  render={(routeProps) => {
	        return  <SignIn error={error} onSignIn={this.handleSignIn} {...routeProps}  />
        }}/>
        
        <Route exact path="/profile" render={(routeProps)=>{
          return <MyProfile user={user} onAdd={this.handleAdd} matches={matches} onDelete={this.handleDelete}  {...routeProps} />
        }} />

        <Route exact path="/matches/:matchesId" render={(routeProps)=>{
          return <MatchesDetail user={user} matches={matches} {...routeProps} onAdd={this.handleJoin} />
        }}/>



       </Switch>
       
       
      </div>
    )
  }
}

export default withRouter(App)



/*
<Route exact path="/list" component={ListMatches} user={user} matches={matches}/>
 */