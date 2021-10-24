import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <footer className="text-center text-lg-start text-white bg-dark red-border-top">
            <section className="py-3">
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                        {/* About */}
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold metal-font">Dental Care</h6>
                            <hr
                                className="mb-4 mt-0 d-inline-block mx-auto"
                                style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
                            />
                            <p>
                                This is a dental care website. Here you can find any kind of dental service. You can select your preferred service for your treatment.
                            </p>
                        </div>

                        {/* Service */}
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold metal-font">Service</h6>
                            <hr
                                className="mb-4 mt-0 d-inline-block mx-auto"
                                style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
                            />

                            <p>
                                <NavLink to="/service" className="text-white text-decoration-none">Teeth Whitening</NavLink>
                            </p>


                            <p>
                                <NavLink to="/service" className="text-white text-decoration-none">Root Canal</NavLink>
                            </p>

                            <p>
                                <NavLink to="/service" className="text-white text-decoration-none">Braces</NavLink>
                            </p>

                            <p>
                                <NavLink to="/service" className="text-white text-decoration-none">Scaling</NavLink>
                            </p>
                        </div>

                        {/* Useful links */}
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold metal-font">Useful links</h6>
                            <hr
                                className="mb-4 mt-0 d-inline-block mx-auto"
                                style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
                            />

                            <p>
                                <NavLink to="/home" className="text-white text-decoration-none">Home</NavLink>
                            </p>

                            <p>
                                <NavLink to="/service" className="text-white text-decoration-none">Service</NavLink>
                            </p>

                            <p>
                                <NavLink to="/about" className="text-white text-decoration-none">About</NavLink>
                            </p>

                            <p>
                                <NavLink to="/appointment" className="text-white text-decoration-none">Appointment</NavLink>
                            </p>
                        </div>

                        {/* Contact */}
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold metal-font">Contact</h6>
                            <hr
                                className="mb-4 mt-0 d-inline-block mx-auto"
                                style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
                            />
                            <p><i className="fas fa-home mr-3"></i> Dhaka, Gulshan 1212, Bangladesh</p>
                            <p><i className="fas fa-envelope mr-3"></i> info@dentalcare.com</p>
                            <p><i className="fas fa-phone mr-3"></i> +880 199 999 888</p>
                            <p><i className="fas fa-print mr-3"></i> +880 199 999 888</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Copyright */}
            <div
                className="text-center p-3"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
            >
                <span className="me-2">© 2021 Copyright</span>

                <NavLink to="/" className="text-white text-decoration-none metal-font" href="https://mdbootstrap.com/">
                    MD. RIFAT ISLAM
                </NavLink>
            </div>
        </footer>
    );
};

export default Footer;