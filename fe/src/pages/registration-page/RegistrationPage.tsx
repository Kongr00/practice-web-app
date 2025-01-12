import React from 'react';
import {Link} from "react-router-dom";

const RegistrationPage = () => {
    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            <div>
                Register is here
            </div>
            <Link to={'/login'}>LOG IN</Link>
        </div>
    );
};

export default RegistrationPage;