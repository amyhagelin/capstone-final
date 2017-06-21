import React from "react";
import {connect} from 'react-redux';

import { login } from "../actions/auth";

export class Login extends React.Component {

   auth(event) {
        event.preventDefault();
        console.log(this.props);
        this.props.dispatch(login());
    }

    render() {
        return (
            <div>
                <button onClick={e => this.auth(e)} >
                    Login
                </button>
            </div>
        );
    }

};

export default connect()(Login);

