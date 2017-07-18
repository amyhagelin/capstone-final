import React from "react";
import {connect} from 'react-redux';

import { signup } from "../actions/signup";
import { Link } from 'react-router-dom'


export class Signup extends React.Component {

    auth(event) {
        event.preventDefault();
        console.log(this.props);
        const usernameValue = this.usernameInput.value;
        const passwordValue = this.passwordInput.value;
        this.props.dispatch(signup(usernameValue, passwordValue));
    }

    render() {
        return (
            <div>
                <header><Link to="/">Home</Link></header>
                <section className="min-height abstract-background">
                <form className="nav-padding">
                    {/*Name: <input type="text"/>*/}
                    <input placeholder="PICK A USERNAME" type="text" ref={ input => this.usernameInput = input }/>
                    <br/>
                    <input placeholder="PICK A PASSWORD" type="text" ref={ input => this.passwordInput = input }/>
                    <br/>
                    <button className="button" onClick={e => this.auth(e)} >
                        Sign Up
                    </button>
                </form>
                <Link to="/dashboard">Dashboard</Link>
                <div className="alert"></div>
                </section>
            </div>
        );
    }

};

export default connect()(Signup);

