import React, { Component } from 'react'

class MatchesDetail extends Component {
    
    state={
        MatchesDetail:{}
    }

    componentDidMount(){
        let matchesId = this.props.match.params.matchesId
    }

    render() {
        return (
            <div>
                <h1>Match Details</h1>
            </div>
        )
    }
}

export default MatchesDetail