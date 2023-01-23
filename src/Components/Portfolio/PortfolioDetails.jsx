import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { projects } from '../../API/projects';
import Title from "../../Utilities/Title/Title";

const PortfolioDetails = () => {
    const { id } = useParams();
    const [project, setProject] = useState([]);
    useEffect(() => {
        const data = projects.filter(ele => ele.id === id);
        setProject(...data);
    }, [id]);

    return (
        <div className="container">
            <section id='' data-aos="zoom-in">
                <Title name="Project details" />
                <div className="project-details">
                    <div className="row">
                        <div className="col">
                            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    {project?.images?.map((item, index) => {
                                        return <div key={index} data-bs-interval="1000" className={`carousel-item ${index === 0 ? "active" : ""}`}>
                                            <img src={item.imageUrl} className="d-block w-100" alt="project" />
                                        </div>
                                    })}
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                        <div className="col">
                            <div className="project-info">
                                <h3>Project information</h3>
                                <ul>
                                    <li><b>Category:</b> {project?.category}</li>
                                    <li><b>technology: </b> {project?.languages?.map((item, idx) => {
                                        return <span key={idx}>{`${item}, `}</span>
                                    })} </li>
                                    <li><b>Project date:</b> {project?.createdAt} </li>
                                    <li><b>Project URL:</b><a href={project?.liveUrl} target="_blank" rel="noopener noreferrer"> click here</a> </li>
                                </ul>
                            </div>
                            <div className="project-desc">
                                <h2>{project?.title}</h2>
                                <p>{project?.desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PortfolioDetails