import React from 'react'
import {Link} from 'react-router-dom'

function MyProfile(props) {
    const {username, onLogout} = props 
        return (
            <div>
                <h1>This is my Profile Page</h1>
                <button onClick={onLogout} >Logout</button>
            </div>
        )
    
}

export default MyProfile
