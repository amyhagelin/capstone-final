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

    render() {
        return (
            <div>
                <header><Link to="/">Home</Link></header>
                <section className="min-height abstract-background">
                    {/*{ this.props.state.ui.alert && this.props.state.ui.alert.location === 'login' && <Alert /> }*/}
                    <form className="nav-padding">
                        <h3>To enter demo mode use Username: demomode / Password: 123</h3>
                        <input placeholder="YOUR USERNAME" type="text" ref={ input => this.usernameInput = input }/>
                        <br/>
                        <input placeholder="YOUR PASSWORD" type="password" ref={ input => this.passwordInput = input }/>
                        <br/>
                        <button className="button" onClick={e => this.auth(e)} >
                         Log In                       
                        </button>
                    </form>
                    {/*{ isErrorForLoginPage && <Alert errorMessage={} /> }*/}
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


export default connect(mapStateToProps)(Login);