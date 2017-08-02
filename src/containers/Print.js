import React from 'react'
import Log from '../components/Log'
import Graphs from '../components/Graphs'

import { Link } from 'react-router-dom'

const Print = () => (
    <div className="print">
        <header>
            <Link to="/dashboard">Return to Dashboard</Link>
        </header>
        <section id="graphs" className="nav-padding" >
            <div className="content graphs"><Graphs /></div>
        </section>
        <section id="log">
            <div className="content"><Log /></div>
        </section>
    </div>
)

export default Print