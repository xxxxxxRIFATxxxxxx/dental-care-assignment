import React, { useEffect, useState } from 'react';
import { createContext } from 'react';

export const DoctorsContext = createContext([]);

const DoctorsProvider = ({ children }) => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch("./doctors.json")
            .then(response => response.json())
            .then(data => setDoctors(data));
    }, []);

    return (
        <DoctorsContext.Provider value={doctors}>
            {children}
        </DoctorsContext.Provider>
    );
};

export default DoctorsProvider;