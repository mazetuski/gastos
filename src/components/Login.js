// Dependencies
import React from 'react';
import {connect} from 'react-redux';
import {authUser} from "../actions";

const mapDispatchToProps = dispatch => {
    return {
        authUser: isAuth => dispatch(authUser(isAuth))
    };
};

class connectedLogin extends React.Component{
    constructor() {
        super();

        this.state = {
            user: "",
            pass: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { user } = this.state;
        const { pass } = this.state;

        this.props.authUser({user, pass});

    }

    render() {
        const { user } = this.state;
        const { pass } = this.state;
        return (
            <form className="col-md-4 offset-md-4" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="user">User</label>
                    <input type="text" className="form-control" id="user" value={user} onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="pass">Pass</label>
                    <input type="password" className="form-control" id="pass" value={pass} onChange={this.handleChange}/>
                </div>
                <button type="submit" className="btn btn-success btn-lg">Login</button>
            </form>
        );
    }
}

const Login = connect(null, mapDispatchToProps)(connectedLogin);

export default Login;