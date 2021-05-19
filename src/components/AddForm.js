
import React, { Component } from  'react'

class AddForm extends Component {

	render() {
    const {onAdd} = this.props
		return (
			<form onSubmit={onAdd}>
				<input name="sports"  type="text" placeholder="Enter name"/>
				<input name="username"  type="text" placeholder="Enter name"/>
				<button type="submit" >Submit</button>
        
			</form>
		)
	}
}

export  default AddForm


