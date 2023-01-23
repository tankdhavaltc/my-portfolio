import React, { useEffect, useState } from 'react'
import Title from '../../Utilities/Title/Title';
import "./style.css";
import profile from "../../accets/images/avatar-profile-picture.jpg";
import SkillProgressBar from '../../Utilities/ProgressBar/ProgressBar';
import Counter from '../../Utilities/Counter/Counter';
import { skills } from '../../API/skils';
import { facts } from '../../API/facts';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonials } from '../../API/testimonials';
import ReactSimplyCarousel from 'react-simply-carousel';


const About = () => {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const [isShow, setisShow] = useState(true);
    useEffect(() => {
        if (window.screen.width <= 450) {
            setisShow(false);
        }
        else {
            setisShow(true);
        }
    }, [])
    return (
        <section id='about'>
            <div className="container">
                <Title name="About" />
                <p className="text-center mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dicta voluptatem modi laborum deserunt! Adipisci enim magni quos temporibus amet sunt praesentium minus et ullam velit veniam quas autem deserunt animi, doloremque sint nam corporis sapiente mollitia in numquam voluptatem. Ipsam dolor at tenetur rem, atque mollitia! Quae, ratione beatae!</p>
                <div className="row profile">
                    <div className="col-5 image">
                        <img className='img-fluid' src={profile} alt="profile" />
                    </div>
                    <div className="col description">
                        <h3 className='fw-bold'>ReactJs Devloper</h3>
                        <p className="fst-italic">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. In accusamus officia doloremque placeat fugiat voluptas quasi quo ut reprehenderit esse.
                        </p>
                        <div className="row">
                            <div className="col">
                                <p> <b>Birthday</b>: 04 July 2001 </p>
                                <p> <b>Website</b>: <a target="_blank" rel="noreferrer" href="https://www.example.com/">www.example.com</a></p>
                                <p> <b>Phone</b>: <a href="tel:+91990494102">+91 990494102</a> </p>
                                <p> <b>Email</b>: <a href="mailto:tankdhaval2001@gmail.com">tankdhaval2001@gmail.com</a> </p>
                            </div>
                            <div className="col">
                                <p> <b>Age</b>: 23 </p>
                                <p> <b>City</b>: A'bad, Gujrat</p>
                                <p> <b>Degree</b>: M.SC (CA & IT) </p>
                                <p> <b>Freelance</b>: Available  </p>
                            </div>
                        </div>
                        <div className="row">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut non necessitatibus deserunt facere accusantium quam ad corporis earum soluta possimus nulla illo amet nam voluptatem recusandae veniam inventore unde numquam temporibus magni, voluptate repellendus! Veniam dolorem atque minima repudiandae provident labore voluptates. Magni ducimus doloribus ab necessitatibus animi temporibus itaque.</p>
                        </div>
                    </div>
                </div>
                <section id='skills'>
                    <Title name="Skills" />
                    <p className="text-center mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dicta voluptatem modi laborum deserunt! Adipisci enim magni quos temporibus amet sunt praesentium minus et ullam velit veniam quas autem deserunt animi, doloremque sint nam corporis sapiente mollitia in numquam voluptatem. Ipsam dolor at tenetur rem, atque mollitia! Quae, ratione beatae!</p>
                    <div className="d-flex flex-wrap gap-3 justify-content-center">
                        {skills.map(({ title, width }, index) => {
                            return (
                                <div className="" key={index}>
                                    <SkillProgressBar title={title} width={width} />
                                </div>
                            )
                        }
                        )}
                    </div>
                </section>
                <section id="facts">
                    <Title name="facts" />
                    <p className="text-center mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dicta voluptatem modi laborum deserunt! Adipisci enim magni quos temporibus amet sunt praesentium minus et ullam velit veniam quas autem deserunt animi, doloremque sint nam corporis sapiente mollitia in numquam voluptatem. Ipsam dolor at tenetur rem, atque mollitia! Quae, ratione beatae!</p>
                    <div className="row">
                        {facts.map(({ count, title }, index) => {
                            return (
                                <div className="col" key={index}>
                                    <Counter duration={3} count={count} title={title} />
                                </div>
                            )
                        })}
                    </div>
                </section>
                <section id="testimonials">
                    <Title name="TESTIMONIALS" />
                    <p className="text-center mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dicta voluptatem modi laborum deserunt! Adipisci enim magni quos temporibus amet sunt praesentium minus et ullam velit veniam quas autem deserunt animi, doloremque sint nam corporis sapiente mollitia in numquam voluptatem. Ipsam dolor at tenetur rem, atque mollitia! Quae, ratione beatae!</p>
                    <div className="all-testimonials">
                        <ReactSimplyCarousel
                            activeSlideIndex={activeSlideIndex}
                            onRequestChange={setActiveSlideIndex}
                            itemsToShow={1}
                            itemsToScroll={1}
                            autoplay={true}
                            autoplayDirection={"forward"}
                            delay={1000}
                            speed={1000}
                            dotsNav={{
                                show: true, itemBtnProps: {
                                    style: {
                                        height: 12,
                                        width: 12,
                                        borderRadius: "50%",
                                        border: 1,
                                        borderColor: "#34b7a7",
                                        borderStyle: 'solid',
                                        marginTop: "10px",
                                        marginRight: "5px",
                                        background: "white",
                                    }
                                },
                                activeItemBtnProps: {
                                    style: {
                                        height: 12,
                                        width: 12,
                                        borderRadius: "50%",
                                        border: 1,
                                        borderColor: "#34b7a7",
                                        borderStyle: 'solid',
                                        marginTop: "10px",
                                        marginRight: "5px",
                                        background: "#34b7a7"
                                    }
                                }
                            }}
                            forwardBtnProps={{
                                show: isShow,
                                style: {
                                    background: "white",
                                    border: 1,
                                    borderStyle: 'solid',
                                    borderColor: "#34b7a7",
                                    color: "#34b7a7",
                                    borderRadius: "50px",
                                    width: "30px",
                                    height: "30px",
                                    cursor: 'pointer',
                                    alignSelf: 'center',
                                    textAlign: 'center',
                                },
                                children: <i className="fa-sharp fa-solid fa-arrow-right"></i>
                            }}
                            backwardBtnProps={{
                                show: isShow,
                                style: {
                                    background: "white",
                                    border: 1,
                                    borderStyle: 'solid',
                                    borderColor: "#34b7a7",
                                    color: "#34b7a7",
                                    borderRadius: "50px",
                                    width: "30px",
                                    height: "30px",
                                    cursor: 'pointer',
                                    alignSelf: 'center',
                                    textAlign: 'center',
                                },
                                children: <i className="fa-solid fa-arrow-left"></i>
                            }}
                            responsiveProps={[
                                {
                                    itemsToShow: 1,
                                    itemsToScroll: 1,
                                    minWidth: 900,
                                },
                            ]}
                            centerMode={true}
                            easing="linear"
                        >
                            {testimonials.map(({ profile, username, position, message }, index) => {
                                return (
                                    <div className="testimonial" key={index} style={{ width: 800, height: 270 }}>
                                        <img src={profile} alt="profile" />
                                        <h4>{username}</h4>
                                        <h5>{position}</h5>
                                        <p>{message}</p>
                                    </div>
                                )
                            })}
                        </ReactSimplyCarousel>
                    </div>
                </section>
            </div >
        </section >
    )
}

export default About;