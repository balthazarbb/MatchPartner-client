import React, { Component } from 'react'

import config from "../config"
import { Link } from 'react-router-dom'


class ListMatches extends Component {

    render() {
     const {matches} = this.props
        return (
            <div>
              <h1>welcome to the list</h1>
              <p>list in here</p>


              {
                  matches.map((match)=>{
                      return <div>>
                      <Link to={`/matches/${match._id}`}>{match.sports}</Link>
                      </div>
                  })
              }






                
            </div>
        )
    }
}

export default ListMatches


/*

              {
                  matches.map((match)=>{
                      return <div> key={match._id}>
                      <Link to={`/matches/${match._id}`}>{match.sports}</Link>
                      </div>
                  })
              }

*/