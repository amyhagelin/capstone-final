import React from 'react'
import NewEvent from '../components/NewEvent'
import Log from '../components/Log'
import Graphs from '../components/Graphs'

import { Link } from 'react-router-dom'

const Print = () => (
    <div>
        <header>
            <Link to="/dashboard">Dashboard</Link>
        </header>
        <section id="graphs" className="nav-padding"><Graphs /></section>
        <section id="log"><Log /></section>
    </div>
)

export default Print