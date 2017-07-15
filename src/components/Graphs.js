import React, { Component } from "react";
import {connect} from 'react-redux';
import { getEvents } from '../actions/getEvents';

import { Pie } from 'react-chartjs-2';
import { groupBy } from 'lodash/groupBy';

class Graphs extends Component {

    componentDidMount () {
		this.props.dispatch(getEvents());
		console.log('dispatch get events from Graphs')
        console.log(this.props.eventLog)
	}

    colors = [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
                ]

    // findByType() {
    //     _.groupBy(this.props.eventLog, type)
    // }

	render() {

        const data = {
            labels: [
                'Red',
                'Green',
                'Yellow'
            ],
            datasets: [{
                data: [300, 50, 100],
                backgroundColor: this.colors,
                hoverBackgroundColor: this.colors
            }]
        };

		return (
			<div>
				Graphs Go Here
                <Pie data={ data } />            
			</div>
		);
	}
}
// 
// map state to props
const mapStateToProps = state => ({
    eventLog: state.event.log
});

export default connect(mapStateToProps)(Graphs);