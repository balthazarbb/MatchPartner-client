import React, { Component } from 'react'
import axios from 'axios'
import config from "../config"
import { Link } from 'react-router-dom'


class AddComment extends Component {

	render() {
    const {onCom, matchId} = this.props
		return (
			<form onSubmit={(event) => onCom(event, matchId)}>
				<input name="comment"  type="text" placeholder="Comment"/>
				<button type="submit" >Submit</button>
			</form>
		)
	}
}

export  default AddComment



