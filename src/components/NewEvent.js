import React from "react";
import {connect} from 'react-redux';

import { newEvent } from "../actions/newEvent";

export class NewEvent extends React.Component {

    handleNewEvent = (event) => {
        event.preventDefault();
        const dateValue = this.dateInput.value;
        const timeValue = this.timeInput.value;
		const typeValue = this.typeInput.value;
		const triggersValue = this.triggersInput.value;
		const locationValue = this.locationInput.value;
		const medicationValue = this.medicationInput.value;
		const notesValue = this.notesInput.value;
        this.props.dispatch(newEvent(
			dateValue, 
			timeValue,
			typeValue,
			triggersValue,
			locationValue,
			medicationValue,
			notesValue
		));
		this.clearInputs();
    }

	clearInputs = () => {
		this.dateInput.value = ''
        this.timeInput.value = ''
		this.typeInput.value = ''
		this.triggersInput.value = ''
		this.locationInput.value = ''
		this.medicationInput.value = ''
		this.notesInput.value = ''
	}

    render() {
        return (
            <div>
				<h2>Add New Event</h2>
              <form onSubmit={ this.handleNewEvent }>
				<div className="inline-block">
				<input placeholder="Date" type="date" ref={ input => this.dateInput = input } /><br />
				<input placeholder="Time" type="text" ref={ input => this.timeInput = input } /><br />
				<select name="type" ref={ input => this.typeInput = input }>
					<option value="" disabled selected>Seizure Type</option>
					<option value="Aura">Aura</option>
		 			<option value="Absence">Absence</option>
		  			<option value="Atonic-">Atonic</option>
		 			<option value="Clonic">Clonic</option>
		 			<option value="Myoclonic">Myoclonic</option>
		  			<option value="Tonic">Tonic</option>
		  			<option value="Tonic-clonic">Tonic-Clonic</option>
	  			</select>
	  			<br />
				<input placeholder="Triggers" type="text" ref={ input => this.triggersInput = input } /><br />
				</div>
				<div className="inline-block">
				<input placeholder="Location" type="text" ref={ input => this.locationInput = input } /><br />
				<input placeholder="Current Medication" type="text" ref={ input => this.medicationInput = input } /><br />
				<input placeholder="Notes"type="text" ref={ input => this.notesInput = input } /><br />
				<button className="button">Save</button>
				</div>
			    </form>
				<div className="alert">
					{ this.props.alert && this.props.alert.title }
				</div>
            </div>
        );
    }

};

const mapStateToProps = state => ({
    alert: state.ui.alert
});

export default connect(mapStateToProps)(NewEvent);
