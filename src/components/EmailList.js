import React, { Component } from "react";
import SingleEmailComponent from './Email';

class EmailList extends Component {
	render() {
		const emailList = ['a', 'b', 'c']

		return (
			<div>
				<div>Email List</div>
				{ 
					emailList.map((singleEmailFromList) => {
						return <SingleEmailComponent emailProperty={ singleEmailFromList } />
					}) 
				}	
			</div>
		);
	}
}

export default EmailList;