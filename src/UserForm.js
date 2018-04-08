import React from 'react';
import './UserForm.css';

class UserForm extends React.Component {
	render() {
		return (
			<div className="input-group mb-3">
			  <input type="text" className="form-control" placeholder="Zipcode" aria-label="Zipcode" aria-describedby="basic-addon2"/>
			  <div className="input-group-append">
			    <button className="btn btn-secondary" type="button">Submit</button>
			  </div>
			</div>
		);
	}
}

export default UserForm;