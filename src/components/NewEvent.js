import React from "react";
import {connect} from 'react-redux';

import { newEvent } from "../actions/newEvent";

export class NewEvent extends React.Component {

    handleNewEvent = (event) => {
        event.preventDefault();
        console.log(this.props);
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
			locationValue,
			triggersValue,
			medicationValue,
			notesValue
			));
    }

    render() {
        return (
            <div>
              <form onSubmit={ this.handleNewEvent }>
				Date: <input type="text" ref={ input => this.dateInput = input } /><br />
				Time: <input type="text" ref={ input => this.timeInput = input } /><br />
				Type:
				<select name="type" ref={ input => this.typeInput = input }>
					<option value="aura">Aura</option>
		 			<option value="absence">Absence</option>
		  			<option value="atonic-">Atonic</option>
		 			<option value="clonic">Clonic</option>
		 			<option value="myoclonic">Myoclonic</option>
		  			<option value="tonic">Tonic</option>
		  			<option value="tonic-clonic">Tonic-Clonic</option>
	  			</select>
	  			<br />
				Triggers: <input type="text" ref={ input => this.triggersInput = input } /><br />
				Location: <input type="text" ref={ input => this.locationInput = input } /><br />
				Current Medication: <input type="text" ref={ input => this.medicationInput = input } /><br />
				Notes: <input type="text" ref={ input => this.notesInput = input } /><br />
				<button>Save</button>
			    </form>
            </div>
        );
    }

};

export default connect()(NewEvent);
