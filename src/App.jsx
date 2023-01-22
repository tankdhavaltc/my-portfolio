import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import About from "./Components/About/About"
import Resume from "./Components/Resume/Resume"
import Portfolio from "./Components/Portfolio/Portfolio"
import Services from "./Components/Services/Services"
import Contact from "./Components/Contact/Contact"
import { Route, Routes } from 'react-router-dom';
import "./accets/app.css";
import TopButton from './TopButton/TopButton';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    return (
        <>
            <ToastContainer />
            <Header />
            <Routes>
                <Route index element={<Home />} />
                <Route exact path='/' element={<Home />} />
                <Route exact path='/about' element={<About />} />
                <Route exact path='/resume' element={<Resume />} />
                <Route exact path='/services' element={<Services />} />
                <Route exact path='/portfolio' element={<Portfolio />} />
                <Route exact path='/contact' element={<Contact />} />
                <Route exact path='*' element={<Home />} />
            </Routes>
            <Footer />
            <TopButton />
        </>

    )
}

export default App