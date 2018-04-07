import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Head from './Head';
import Footer from './Footer';
import UserForm from './UserForm';

class App extends Component {
    render() {
        return (
            <div>
                <Head/>
                <UserForm/>
                <Footer/>
            </div>
        );
    }
}

export default App;
