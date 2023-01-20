import React from 'react'
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

const About = () => {
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
                    <div className="row">
                        {skills.map(({ title, width }, index) => {
                            return (
                                <div className="col" key={index}>
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
                    <div className="">
                        {/* <div id="carouselExampleIndicators" class="carousel slide">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner">
                                {testimonials.map(({ profile, position, message, username }, index) => {
                                    return (
                                        <div class="carousel-item active">
                                            <div className="testimonial">
                                                <img src={profile} alt="profile" />
                                                <h5>{username}</h5>
                                                <p>{username}</p>
                                                <p>{message}</p>
                                            </div>
                                        </div>
                                    )
                                })}

                                <div class="carousel-item">
                                    <div className="testimonial">
                                        <img src={profile} alt="profile" />
                                        <h5>user 1</h5>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, amet? Quasi magni, perferendis optio earum fugiat porro ullam reprehenderit architecto.</p>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div className="testimonial">
                                        <img src={profile} alt="profile" />
                                        <h5>user 1</h5>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, amet? Quasi magni, perferendis optio earum fugiat porro ullam reprehenderit architecto.</p>
                                    </div>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div> */}
                    </div>
                </section>
            </div>
        </section>
    )
}

export default About;