import React from 'react'
import NewEvent from '../components/NewEvent'
import Log from '../components/Log'
import Logout from '../components/Logout'
import Graphs from '../components/Graphs'
import { Link } from 'react-router-dom'


// graphs
// input form
// log

const Dashboard = () => (
    <div>
        <header>
            <a href="#graphs">Graphs</a>
            <a href="#new">Add New</a>
            <a href="#log">List</a>
            <a href="#share">Share</a>
            <Logout />
        </header>
        <section id="graphs" className="nav-padding" >
            <div className="content"><Graphs /></div>
        </section>
        <section id="new" className="abstract-background">
            <div className="content"><NewEvent /></div>
        </section>
        <section id="log" className="blue"><div className="content"><Log /></div></section>
        <section id="share" className="blue">
            <Link to="/print" className="button">View Printable List</Link>
        </section>
    </div>
)

export default Dashboard