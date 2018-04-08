import React, { Component } from 'react';
import './App.css';

import UserForm from './UserForm';

//return an array containing 2 colors for the gradient

class App extends Component {
	dayNight() {
		var current = new Date();
		if (current.getHours() >= 0 && current.getHours() <= 6) {
			console.log("It is early morning");
		}
		else if (current.getHours() > 6 && current.getHours() <= 12) {
			console.log("It is late morning and almost afternoon");
		}
		else if (current.getHours() > 12 && current.getHours() <= 16) {
			console.log("It is afternoon");
		}
		else if (current.getHours() > 16 && current.getHours() <= 19) {
			console.log("It is evening");
		}
		else {
			console.log("It is night");
		}
	}
    render() {
    	this.dayNight();
        return (
            <div className="container-fluid">
            	<div className="row justify-content-center">
                	<img id="logo" alt="weather now logo" src={require("./imgs/weather-now-logo.png")}/>
                </div>
                <div className="row justify-content-center">
                	<div className="col-2">
                		<UserForm/>
                	</div>
                </div>
            </div>
        );
    }
}

export default App;
