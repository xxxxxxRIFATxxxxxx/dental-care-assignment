import React, { useEffect, useState } from 'react';
import { createContext } from 'react';

export const ServiceContext = createContext([]);

const ServiceProvider = ({ children }) => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("./dental-service.json")
            .then(response => response.json())
            .then(data => setServices(data));
    }, []);

    return (
        <ServiceContext.Provider value={services}>
            {children}
        </ServiceContext.Provider>
    );
};

export default ServiceProvider;