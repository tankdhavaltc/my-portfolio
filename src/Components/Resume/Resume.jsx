import React from 'react'
import Title from '../../Utilities/Title/Title'
import "./style.css";

const Resume = () => {
    return (
        <div className="container">
            <section id="resume">
                <Title name="resume" />
                <p className="text-center mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dicta voluptatem modi laborum deserunt! Adipisci enim magni quos temporibus amet sunt praesentium minus et ullam velit veniam quas autem deserunt animi, doloremque sint nam corporis sapiente mollitia in numquam voluptatem. Ipsam dolor at tenetur rem, atque mollitia! Quae, ratione beatae!</p>
                <div className="row resume-box">
                    <div className="col">
                        <div className="resume">
                            <h3 className="resume-title">Sumary</h3>
                            <div className="resume-item">
                                <h4>Alice Barkley</h4>
                                <p><em>Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverabl.</em></p>
                                <ul>
                                    <li>Portland par 127,Orlando, FL</li>
                                    <li>(123) 456-7891</li>
                                    <li>alice.barkley@example.com</li>
                                </ul>
                            </div>
                        </div>
                        <div className="resume">
                            <h3 className="resume-title">Education</h3>
                            <div className="resume-item">
                                <h4>M. SC. (CA & IT)</h4>
                                <h5>2018 - 2021</h5>
                                <p><em>K. S. School of Business Management & Information Technology</em></p>
                                <p>Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend</p>
                            </div>
                            <div className="resume-item">
                                <h4>B. SC. (CA & IT)</h4>
                                <h5>2021 - 2023</h5>
                                <p><em>K. S. School of Business Management & Information Technology</em></p>
                                <p>Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="resume">
                            <h3 className="resume-title">Professional Experience</h3>
                            <div className="resume-item">
                                <h4>Lorem ipsum dolor, sit amet consectetur </h4>
                                <h5>2023 - 2025</h5>
                                <p><em>Lorem ipsum, dolor sit, amet consectetur</em></p>
                                <ul>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
                                </ul>
                            </div>
                            <div className="resume-item">
                                <h4>Lorem ipsum dolor, sit amet consectetur </h4>
                                <h5>2023 - 2025</h5>
                                <p><em>Lorem ipsum, dolor sit, amet consectetur</em></p>
                                <ul>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Resume