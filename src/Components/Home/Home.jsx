import React from 'react'
import { NavLink } from 'react-router-dom';
import "./style.css";

const Home = () => {
    return (
        <section id='hero'>
            <h1>Dhaval Tank</h1>
            <h2>I'm a ReactJs Intern at TechCompose Solutions Pvt. Ltd.</h2>
            <NavLink to="/about" >About Me</NavLink>
        </section>
    )
}

export default Home