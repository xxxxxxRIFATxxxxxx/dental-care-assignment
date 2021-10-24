import React from 'react';
import { Form } from 'react-bootstrap';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import './Login.css';
import { useForm } from "react-hook-form";
import GoogleIcon from '../../images/google-brands.svg';
import useAuth from '../../hooks/useAuth';
import Alert from '../Alert/Alert';

const Login = () => {
    const history = useHistory();
    const location = useLocation();
    const redirect_uri = location.state?.from || '/';
    const {
        loginWithEmailAndPassword,
        loginWithGoogle,
        setUser,
        errorMessage,
        setErrorMessage,
        setIsLoading
    } = useAuth();

    // Login With Email
    const handleLoginWithEmailAndPassword = (email, password) => {
        loginWithEmailAndPassword(email, password)
            .then((userCredential) => {
                setUser(userCredential.user);
                history.push(redirect_uri);
            })
            .catch((error) => {
                setErrorMessage(error.message);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    // Login With Google
    const handleGoogleLogin = (event) => {
        event.preventDefault();
        setErrorMessage("");

        loginWithGoogle()
            .then((result) => {
                setUser(result.user);
                history.push(redirect_uri);
            })
            .catch((error) => {
                setErrorMessage(error.message);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        setErrorMessage("");
        const { email, password } = data;
        handleLoginWithEmailAndPassword(email, password);
    };

    return (
        <div className="form small-font my-5">
            <h2 className="display-6 text-center mb-3 text-primary fw-bold">Login</h2>

            {/* Error Message */}
            {errorMessage ? <Alert message={errorMessage}></Alert> : null}

            <Form className="container mx-auto border py-3" onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                        className="silver-bg text-muted small-font border-1 p-3"
                        type="email"
                        placeholder="Email"
                        {...register("email", { required: true })}
                    />

                    <Form.Text className="text-danger">
                        {errors.email && "This field is required"}
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                        className="silver-bg text-muted small-font border-1 p-3"
                        type="password"
                        placeholder="Password"
                        {...register("password", { required: true })}
                    />

                    <Form.Text className="text-danger">
                        {errors.password && "This field is required"}
                    </Form.Text>
                </Form.Group>

                <button className="btn btn-primary w-100 small-font p-3 mb-3">Login</button>

                <div className="text-center mb-3">
                    <NavLink to="/signup" className="text-danger text-decoration-none small-font">
                        Don't have account?
                    </NavLink>
                </div>

                <div>
                    <h6 className="text-center text-primary mb-3">--------- OR ---------</h6>
                    <button
                        className="btn btn-primary w-100 small-font p-3 mb-3"
                        onClick={handleGoogleLogin}
                    >
                        <img src={GoogleIcon} alt="google" className="img-fluid google-icon me-2" />
                        Continue with Google
                    </button>
                </div>
            </Form>
        </div>
    );
};

export default Login;