import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import useServices from '../../hooks/useServices';

const Appointment = () => {
    // State
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    // Context
    const services = useServices();

    // Get All Service Name
    const serviceName = services.map(service => {
        const name = service.name;
        return (
            <option key={service.id} value={name}>
                {name}
            </option>
        );
    });

    // History
    const history = useHistory();

    // Handle Input Fields
    const handleAppointment = () => {
        if (name && email) {
            history.push("/success");
        };
    };

    const handleName = event => {
        setName(event.target.value);
    };

    const handleEmail = event => {
        setEmail(event.target.value);
    };

    return (
        <Container className="py-5 mt-5">
            <h2 className="metal-font display-6 text-center pb-3 text-primary fw-bold">Appointment</h2>
            <form>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Your Name"
                        onChange={handleName}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="example@gmail.com"
                        onChange={handleEmail}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="form-label">
                        Which service you want?
                    </label>

                    <select className="form-select">
                        <option >Choose Service</option>
                        {serviceName}
                    </select>
                </div>

                <button type="submit" onClick={handleAppointment} className="btn btn-primary w-100">Submit</button>
            </form>
        </Container>
    );
};

export default Appointment;