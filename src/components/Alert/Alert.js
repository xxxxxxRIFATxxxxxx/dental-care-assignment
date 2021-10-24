import React from 'react';
import { Alert as AlertMessage } from 'react-bootstrap';

const Alert = ({ message }) => {
    return (
        <AlertMessage variant="danger" className="text-center">
            {message}
        </AlertMessage>
    );
};

export default Alert;