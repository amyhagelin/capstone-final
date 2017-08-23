import React from 'react'
import NewEvent from '../components/NewEvent'
import Log from '../components/Log'
import Logout from '../components/Logout'
import Graphs from '../components/Graphs'
import { Link } from 'react-router-dom'

const Dashboard = () => (
    <div>
        <header>
            <ul>
                <li><a href="#graphs">Graphs</a></li>
                <li><a href="#new">Add New</a></li>
                <li><a href="#log">List</a></li>
                <li><a href="#share">Share</a></li>
                <li><Logout /></li>
            </ul>
        </header>
        <section className="dash-nav-padding" >
            <div id="graphs" className="content graphs"><Graphs /></div>
        </section>
        <section className="abstract-background">
            <div id="new" className="content"><NewEvent /></div>
        </section>
        <section className="blue">
            <div id="log" className="content"><Log /></div>
        </section>
        <section  className="blue">
            <Link id="share" to="/print" className="button">View Printable List</Link>
        </section>
    </div>
)

export default Dashboard