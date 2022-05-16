import React from 'react';
import Carousel1 from '../../assets/img/carousel-1.jpg';
import Carousel2 from '../../assets/img/carousel-2.jpg';
import Logo from '../../assets/img/logo.jpeg';

export const Navbar1 = () => {
    return (
        <>
            <div className="container-fluid position-relative p-0">
                <nav className="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
                    <a href="index.html" className="navbar-brand p-0">
                        <h1 className="m-0"><img src={Logo} alt='' style={{width: '15%', padding: '15px'}} />KAEMLAB</h1>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto py-0">
                            <a href="index.html" className="nav-item nav-link active">Home</a>
                            <a href="about.html" className="nav-item nav-link">About</a>
                            <a href="service.html" className="nav-item nav-link">Services</a>
                            <a href="contact.html" className="nav-item nav-link">Contact</a>
                        </div>
                        <button type="button" className="btn text-primary ms-3" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fa fa-search"></i></button>
                    </div>
                </nav>

                <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="w-100" src={Carousel1} alt="" />
                                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                    <div className="p-3" style={{width: "900px"}}>
                                        <h5 className="text-white text-uppercase mb-3 animated slideInDown">Creative & Innovative</h5>
                                        <h1 className="display-1 text-white mb-md-4 animated zoomIn">Creative & Innovative Digital Solution</h1>
                                        <a href="" className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">Contact Us</a>
                                    </div>
                                </div>
                        </div>
                        <div className="carousel-item">
                            <img className="w-100" src={Carousel2} alt="" />
                                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                    <div className="p-3" style={{width: "900px"}}>
                                        <h5 className="text-white text-uppercase mb-3 animated slideInDown">Creative & Innovative</h5>
                                        <h1 className="display-1 text-white mb-md-4 animated zoomIn">Creative & Innovative Digital Solution</h1>
                                        <a href="" className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">Contact Us</a>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </>
    )
}
