import React from 'react'
import { NavLink } from 'react-router-dom'
import "./style.css";

const Header = () => {
    return (
        <>
            <header className='fixed-top' id='header'>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-between" id="navbarTogglerDemo01">
                            <div>
                                <NavLink className="logo navbar-brand" to="/" >Dhaval Tank</NavLink>
                            </div>
                            <div className="d-block">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/" >Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/about" >About</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/resume" >Resume</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/services" >Services</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/portfolio" >Portfolio</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/contact" >Contact</NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div className="d-flex nav-icons gap-2">
                                <NavLink to='/' className='nav-icon-link'>
                                    <i className="fa-brands fa-square-twitter"></i>
                                </NavLink>
                                <NavLink to='/' className='nav-icon-link'>
                                    <i className="fa-brands fa-square-facebook"></i>
                                </NavLink>
                                <NavLink to='/' className='nav-icon-link'>
                                    <i className="fa-brands fa-square-instagram"></i>
                                </NavLink>
                                <NavLink to='/' className='nav-icon-link'>
                                    <i className="fa-brands fa-linkedin"></i>
                                </NavLink>
                            </div>
                        </div>
                    </div>

                </nav>
            </header>
        </>
    )
}

export default Header