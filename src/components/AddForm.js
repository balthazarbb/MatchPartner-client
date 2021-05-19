
import React, { Component } from  'react'

class AddForm extends Component {

	render() {
    const {onAdd} = this.props
		return (
			<form onSubmit={onAdd}>
				<input name="sports"  type="text" placeholder="Which Sport?"/>
        <input name="username"  type="text" placeholder="Enter name"/>
        <button type="submit" >Submit</button>

        
			</form>
		)
	}
}

export  default AddForm


/*
	      <input name="dateAndTime"  type="text" placeholder="Date and Time"/>
        <input name="duration"  type="text" placeholder="Duration"/>
        <input name="numberOfParticipants"  type="text" placeholder="How many participants"/>
        <input name="equipment"  type="text" placeholder="Equipment needed"/>
				

*/ 