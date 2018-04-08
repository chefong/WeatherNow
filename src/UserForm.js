import React from 'react';
import './UserForm.css';

class UserForm extends React.Component {
	render() {
		return (
			<div class="input-group mb-3">
			  <input type="text" class="form-control" placeholder="Zipcode" aria-label="Zipcode" aria-describedby="basic-addon2"/>
			  <div class="input-group-append">
			    <button class="btn btn-outline-secondary" type="button">Submit</button>
			  </div>
			</div>
		);
	}
}

export default UserForm;