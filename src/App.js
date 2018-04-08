import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Head from './Head';
import Footer from './Foot';
import UserForm from './UserForm';

//return an array containing 2 colors for the gradient
function dayNight() {
	var current = Date();
	if (current.get)
}

class App extends Component {
    render() {
        return (
            <div class="container-fluid">
            	<div class="row justify-content-center">
            		<div class="col-6">
                		<Head/>
                	</div>
                </div>
                <div class="row justify-content-center">
                	<div class="col-2">
                		<UserForm/>
                	</div>
                </div>
            </div>
        );
    }
}

export default App;
