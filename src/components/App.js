// Dependencies
import React, {Component} from 'react';
import List from './List';
import Form from './Form';
import logo from '../logo.svg';
import '../App.css';
import Main from './Main';
import {Link} from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <div className="App row">
                <header className="App-header col-12">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Aplicación Gastos</h1>
                </header>
                <nav className="col-12 navbar navbar-expand-lg navbar-light bg-light">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item ml-4">
                                <Link className="navbar-brand" to='/'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="navbar-brand" to='/form'>Nuevo</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="col-10 offset-1 text-center mt-5">
                    <Main/>
                </div>
            </div>
        );
    }
}

export default App;