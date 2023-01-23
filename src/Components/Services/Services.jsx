import React from 'react'
import "./style.css";
import Title from "../../Utilities/Title/Title";
import { services } from "../../API/services";

const Services = () => {
    return (
        <div className="container">
            <section id="services">
                <Title name="services" />
                <p className="text-center mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dicta voluptatem modi laborum deserunt! Adipisci enim magni quos temporibus amet sunt praesentium minus et ullam velit veniam quas autem deserunt animi, doloremque sint nam corporis sapiente mollitia in numquam voluptatem. Ipsam dolor at tenetur rem, atque mollitia! Quae, ratione beatae!</p>
                <div className="services">
                    {services.map(({ title, icon, desc }, index) => {
                        return (
                            <div className="service-card" key={index}>
                                <i className={`${icon} icon`}></i>
                                <h4>{title}</h4>
                                <p>{desc}</p>
                            </div>
                        )
                    })}
                </div>
            </section>
        </div>
    )
}

export default Services