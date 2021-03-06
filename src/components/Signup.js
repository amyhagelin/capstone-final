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
                    <input placeholder="Pick a Username" type="text" ref={ input => this.usernameInput = input }/>
                    <br/>
                    <input placeholder="Pick a Password" type="password" ref={ input => this.passwordInput = input }/>
                    <br/>
                    <button className="button" onClick={e => this.auth(e)} >
                        Sign Up
                    </button>
                </form>
                <div className="alert">
                    { this.props.alert && this.props.alert.title }
                </div>
                </section>
            </div>
        );
    }

};

const mapStateToProps = state => ({
    alert: state.ui.alert
});

export default connect(mapStateToProps)(Signup);

