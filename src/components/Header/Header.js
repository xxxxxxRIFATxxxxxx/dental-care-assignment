import React from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTooth } from '@fortawesome/free-solid-svg-icons';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, logout, setUser, setErrorMessage, setIsLoading } = useAuth();
    const history = useHistory();
    const redirect_uri = '/login';

    const handleLogout = () => {
        logout()
            .then(() => {
                setUser({});
                history.push(redirect_uri);
            })
            .catch((error) => {
                setErrorMessage(error.message);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (
        <Navbar bg="primary" variant="dark" expand="lg" className="py-3">
            <Container>
                <NavLink to="/" className="text-decoration-none">
                    <Navbar.Brand className="fs-4 nav-title text-white">
                        <FontAwesomeIcon icon={faTooth} className="me-2" />
                        <span>Dental Care</span>
                    </Navbar.Brand>
                </NavLink>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav" className="text-white">
                    <Nav className="ms-auto">
                        <NavLink to="/home" className="text-white me-4 fs-6 text-decoration-none nav-item ">
                            Home
                        </NavLink>

                        <NavLink to="/service" className="text-white me-4 fs-6 text-decoration-none nav-item">
                            Service
                        </NavLink>

                        <NavLink to="/about" className="text-white me-4 fs-6 text-decoration-none nav-item">
                            About
                        </NavLink>

                        <NavLink to="/appointment" className="text-white me-4 fs-6 text-decoration-none nav-item">
                            Appointment
                        </NavLink>

                        <NavLink to="/contact" className="me-4 fs-6 text-white text-decoration-none nav-item">
                            Contact
                        </NavLink>

                        <NavLink to="/doctors" className="me-4 fs-6 text-white text-decoration-none nav-item">
                            Doctors
                        </NavLink>

                        <NavLink to="/blog" className="me-4 fs-6 text-white text-decoration-none nav-item">
                            Blog
                        </NavLink>

                        {/* Conditional Rendering */}
                        {user.email ?
                            <button
                                className="btn p-0 m-0 me-4 fs-6 text-white text-decoration-none nav-item "
                                onClick={handleLogout}
                            >
                                Logout
                            </button> :

                            <div>
                                <NavLink to="/login" className="me-4 fs-6 text-white text-decoration-none nav-item ">
                                    Login
                                </NavLink>

                                <NavLink to="/signup" className="me-4 fs-6 text-white text-decoration-none nav-item">
                                    Signup
                                </NavLink>
                            </div>
                        }

                        {/* Conditional Rendering */}
                        {user.email ?
                            <h5
                                className="p-0 m-0 me-4 text-white"
                            >
                                Hello, {user.displayName || user.email}
                            </h5> :

                            null
                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;