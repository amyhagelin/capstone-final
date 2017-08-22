import React from 'react'
import { Link } from 'react-router-dom'


const LandingPage = () => (
    <div className="landing-page">
        <header>
            <Link to="/login">Log In</Link>
            <Link to="/signup">Sign Up</Link>
        </header>
        <section className="welcome-mat abstract-background">
            <div className="welcome-text">
                <h1>Take control of your Epilepsy</h1>
                <br/>
                <h2>EpiTrack gives you the tools to<br/>improve your treatment plan</h2>
                <br/>
                <h2>Give it a try:</h2>
                <br/>
                <div className="button"><Link to="/login">Log in to Demo Mode</Link></div>
                <br/>
                <a href="#why-track">
                    <h3>Learn More</h3>
                    <br/>
                    <img className="arrow" src={require("../images/downarrow.png")} alt="down arrow"/>
                </a>
            </div>
        </section>
        <section className="why-track" id="why-track">
            <div className="content">
            <img className="icon" src={require("../images/icon.jpg")} alt="log icon"/>
            <br/>
            <ul>
            <h3>The <a href="http://www.epilepsy.com/get-help/managing-your-epilepsy/tracking-my-seizures/importance-tracking-seizures">
            Epilepsy Foundation</a> considers tracking seizures an important part of evaluating and improving a treatment plan.
            <br/>
            <br/>
            Keeping track of seizures can help:</h3>
                <li>Diagnose seizure type, helping you and your family know what to expect and how to respond</li>
                <li>Choose the right medication and evaluate if a treatment is working</li>
                <li>Identify triggers and patterns, allowing you to control seizures through lifestyle modification</li>
            </ul>
            </div>
        </section>
        <section className="how-it-works">
            <div className="content">
            <h1>How it Works</h1>
            <div className="inline-block">
                <h2>Track</h2>
                Our tracking form guides you through a series of questions about each new episode to make sure you record all the important details. 
            </div>
            <div className="inline-block">
                <h2>View</h2>
                A customized log and visual graphs show your seizure history, frequency, and types, allowing you to better detect patterns and triggers.
            </div>
            <div className="inline-block">
                <h2>Share</h2>
                Easily download and share your records with your doctor to use this information in evaluating your treatment plan. 
            </div>
            </div>
        </section>
        <section className="try">
            <div className="content">
            <h1>Give It A Try</h1>
            <br/>
            <div className="button"><Link to="/signup">Sign Up</Link></div>
            <br/>
             <div className="button"><Link to="/login">Log In to Demo Mode</Link></div>
             </div>
        </section>
        <footer>
            <div className="byline">Built by <a href="https://amyhagelin.github.io/portfolio/">Amy Hagelin</a></div>
        </footer>
    </div>
)

export default LandingPage