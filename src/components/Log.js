import React, { Component } from "react";
import {connect} from 'react-redux';
import SingleEventComponent from './Event';
import { getEvents } from '../actions/getEvents';

export class Log extends Component {
	static defaultProps = {
		eventLog: []
	}
	
	componentDidMount () {
		this.props.dispatch(getEvents());
		console.log('dispatch get events from log')
		console.log(this.props.eventLog)

	}

	render() {
		return (
			<div>
				<h2>Seizure List</h2>
				{ 
					this.props.eventLog.map((singleEvent) => {
						return <SingleEventComponent key={ singleEvent._id } event={ singleEvent } />
					}) 
				}	
			</div>
		);
	}
}


const mapStateToProps = state => ({
    eventLog: state.event.log
});

export default connect(mapStateToProps)(Log);
