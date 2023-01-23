import React from 'react'
import { NavLink } from 'react-router-dom';
import "./style.css";

const Home = () => {
    return (
        <section id='hero'>
            <h1 data-aos="zoom-in">Dhaval Tank</h1>
            <h2 data-aos="zoom-in">I'm a ReactJs Intern at TechCompose Solutions Pvt. Ltd.</h2>
            <NavLink className="link-btn" to="/about"  >About Me</NavLink>
            <NavLink className="link-btn-outline" to="/resume" >My Resume</NavLink>
        </section>
    )
}

export default Home