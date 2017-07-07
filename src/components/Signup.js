import React from "react";
import {connect} from 'react-redux';

import { signup } from "../actions/signup";

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
                <form>
                    {/*Name: <input type="text"/>*/}
                    Username: <input type="text" ref={ input => this.usernameInput = input }/>
                    Password: <input type="text" ref={ input => this.passwordInput = input }/>
                    <button onClick={e => this.auth(e)} >
                        Sign Up
                    </button>
                </form>
            </div>
        );
    }

};

export default connect()(Signup);

