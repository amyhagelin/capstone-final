import React, { Component } from "react";
import {connect} from 'react-redux';
import { getEvents } from '../actions/getEvents';

import { Pie } from 'react-chartjs-2';
import {Line} from 'react-chartjs-2';

// import groupBy from 'lodash/groupBy';
import _ from 'lodash';


class Graphs extends Component {

    componentDidMount () {
		this.props.dispatch(getEvents());
		console.log('dispatch get events from Graphs')
        console.log(this.props.eventLog)
	}

    colors = [
                '#C2EEF1', // light blue
                '#F43C62', // pink
                '#00B9C7', // light teal
                '#253C6A', // dark blue
                '#F0ECD0', // sand
                '#00E3C7', // seafoam
                '#940200' // dark red
                ]

	render() {

        const loPieData = _.groupBy(this.props.eventLog, 'type');
       
        const data = {
            labels: Object.keys(loPieData),
            datasets: [{
                label: 'Points',
                data: Object.keys(loPieData).map((label) => loPieData[label] && loPieData[label].length),
                backgroundColor: this.colors,
            }]
        };

        const loLineData = _.groupBy(this.props.eventLog, 'date');
        console.log(loLineData);
        const lineData = Object.keys(loLineData).map( (date) => ({
            x: new Date(date),
            y: loLineData[date].length  
            })
        );

        // {x: date, y: count}

        const dataLine = {
            options: {
                scales: {
                    xAxes: [{
                        type: 'time',
                        time: {
                            displayFormats: {
                                quarter: 'MMM YYYY'
                            },
                            unit: "month"

                        }
                    }]
                }
            },
            // labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                label: 'Seizure Frequency',
                // fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: lineData
                }
            ]
        };

		return (
			<div>
				Graphs Go Here
                <Pie data={ data } />  
                <Line data={ dataLine} />
			</div>
		);
	}
}








const mapStateToProps = state => ({
    eventLog: state.event.log
});

export default connect(mapStateToProps)(Graphs);