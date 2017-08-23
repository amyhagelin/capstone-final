import React from "react";
import Logout from './Logout';

export class Navbar extends React.Component {
	burgerToggle() {
        let linksEl = document.querySelector('.narrowLinks');
        if (linksEl.style.display === 'block') {
                linksEl.style.display = 'none';
            } else {
                linksEl.style.display = 'block';
            }
    }

	render() {
		return (
            <nav>
                <div className="navWide">
                    <div className="wideDiv">
                        <a href="#graphs">Graphs</a>
                        <a href="#new">Add New</a>
                        <a href="#log">List</a>
                        <a href="#share">Share</a>
                        <Logout />
                    </div>
                </div>
                <div className="navNarrow">
                    <button onClick={this.burgerToggle}>MENU</button>
                    <div className="narrowLinks">
                        <a href="#graphs" onClick={this.burgerToggle}>Graphs</a>
                        <a href="#new" onClick={this.burgerToggle}>Add New</a>
                        <a href="#log" onClick={this.burgerToggle}>List</a>
                        <a href="#share" onClick={this.burgerToggle}>Share</a>
                        <Logout onClick={this.burgerToggle}/>
                    </div>
                </div>
            </nav>
		);
	}
}


export default Navbar