// Dependencies
import React, {Component} from 'react';
import Login from './Login'
import logo from '../logo.svg';
import '../App.css';
import Main from './Main';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return {isAuth: state.isAuth, token: state.token};
};

class AppConnected extends Component {
    constructor(props) {
        super(props);
        const { token } = props;
        let isAuth = false;
        if(token){
            isAuth= true;
        }
        this.state = {
            token: token,
            isAuth: isAuth
        };
    }

    render() {
        if(this.state.isAuth) {
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
        }else{
            return (
                <div className="App row">
                    <header className="App-header col-12">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">Aplicación Gastos</h1>
                    </header>
                    <Login/>
                </div>
            );
        }
    }
}

const App = connect(mapStateToProps)(AppConnected);

export default App;