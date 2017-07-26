import React from "react";
import {connect} from 'react-redux';
import { Link } from 'react-router-dom'

import { login } from "../actions/auth";

export class Login extends React.Component {

    auth(event) {
        event.preventDefault();
        console.log(this.props);
        const usernameValue = this.usernameInput.value;
        const passwordValue = this.passwordInput.value;
        this.props.dispatch(login(usernameValue, passwordValue));
    }

// add password like usernameValue DONE
// do the same with signup, model will be the same as User ERROR
// change the post route from /login to /signup in server.js ERROR
// think about features, what models I need for features, 
// what api request I need (GET events, POST events)
// create the schemas for the other features

    render() {
        return (
            <div>
                <header><Link to="/">Home</Link></header>
                <section className="min-height abstract-background">
                    <form className="nav-padding">
                        <input placeholder="YOUR USERNAME" type="text" ref={ input => this.usernameInput = input }/>
                        <br/>
                        <input placeholder="YOUR PASSWORD" type="text" ref={ input => this.passwordInput = input }/>
                        <br/>
                        <button className="button" onClick={e => this.auth(e)} >
                         Log In                       
                        </button>
                    </form>
                    <Link to="/dashboard">Dashboard</Link>
                    {/*{ isErrorForLoginPage && <Alert errorMessage={} /> }*/}
                    <div className="alert"></div>
                </section>
            </div>
        );
    }

};

export default connect()(Login);

