import React from "react";
import {connect} from 'react-redux';
import { Link } from 'react-router-dom'

import { logout } from "../actions/logout";

export class Logout extends React.Component {

    logout(event) {
        console.log("logout clicked");
        this.props.dispatch(logout());
    }

    render() {
        return (            
            <Link to="/" onClick={e => this.logout(e)}>Log Out</Link>            
        );
    }

};

export default connect()(Logout);

