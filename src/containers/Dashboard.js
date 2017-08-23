import React from 'react'
import NewEvent from '../components/NewEvent'
import Log from '../components/Log'
import Navbar from '../components/Navbar'
import Graphs from '../components/Graphs'
import { Link } from 'react-router-dom'

const Dashboard = () => (
    <div>
        <header className='dash-header'>
            <Navbar />
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
            <div className="share">
                <Link id="share" to="/print" className="button">View Printable List</Link>
            </div>
        </section>
    </div>
)

export default Dashboard