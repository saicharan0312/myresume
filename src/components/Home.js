import React, { Component } from 'react'
import Skills from './Skills';
import Experience from './Experience';
import Intrests from './Intrest'; 
import Navbar from './Navbar';
import Education from './Education';
import Profile from './Profile';
import About from './About';

export default class Home extends Component {
    render() {
        return (
            <section>
                <Navbar />
                <div className="container">
                    <div className="row">
                        <div className="col s12 m3 l3">
                            <Profile />
                        </div>
                        <div className="col s12 m9 l9">
                            <About />
                            <Skills />
                            <Experience />
                            <Education />
                            <Intrests />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
