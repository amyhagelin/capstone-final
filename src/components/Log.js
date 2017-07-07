import React, { Component } from "react";
import {connect} from 'react-redux';
import SingleEventComponent from './Event';

class Log extends Component {
	render() {
        const log = ['anything']

		return (
			<div>
				<div>Log</div>
				{ 
					log.map((singleEvent) => {
						return singleEvent
					}) 
				}	
			</div>
		);
	}
}

export default Log
// const mapStateToProps = state => ({
//     // count: state.guesses.length
// });

// export default connect(mapStateToProps)(Log);
