import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class AllMatches extends Component {
    render() {
        const {matches}  = this.props
        return (
            <div>
                <h1>Matchlist</h1>
                {
                    matches.map ((matches)=>{
                        return <div>{matches.name}</div>
                    })
                }
                
            </div>
        )
    }
}

export default AllMatches
