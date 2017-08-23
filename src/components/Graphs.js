import React, { Component } from "react";
import {connect} from 'react-redux';
import { getEvents } from '../actions/getEvents';

import { Pie } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';

// import groupBy from 'lodash/groupBy';
import _ from 'lodash';


export class Graphs extends Component {

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
                // options: {
                //     legend: {
                //     position: 'right'
                //     }
                // }
            }]
        };

        const loLineData = _.groupBy(this.props.eventLog, 'date');
        const lineData = Object.keys(loLineData).map( (date) => {
            return ({
            x: new Date(date),
            y: loLineData[date].length  
            })
        });

        const dataLine = {
            options: {
                scales: {
                    xAxes: [{
                        type: 'time',
                        gridLines: {
                            zeroLineColor: 'transparent'
                        },
                    }],
                    yAxes: [{
                        gridLines: {
                            drawTicks: false,
                            display: false
                        },
                        ticks: {
                            beginAtZero: true,
                            stepSize: 1
                        }
                    }]
                }
            },
            datasets: [
                {
                label: '',
                // fill: false,
                lineTension: 0.1,
                backgroundColor: 'transparent',
                borderColor: 'transparent',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 4,
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
                <h2>My Dashboard</h2>
                { 
                    this.props.eventLog.length 
                    ? (
                        <div>
                            <div className="graph-spacing"></div>
                            <h3>Seizure Type</h3>
                            <Pie data={ data } />  
                            <div className="graph-spacing"></div>
                            <h3>Seizure Frequency</h3>
                            <Line className="graph" data={ dataLine} options={ dataLine.options }/>
                        </div>
                    ) : (
                        <div>No data</div>
                    )
                }
			</div>
		);
	}
}



const mapStateToProps = state => ({
    eventLog: state.event.log
});

export default connect(mapStateToProps)(Graphs);