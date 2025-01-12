import React from 'react';
import {Link} from "react-router-dom";


const LoginPage = () => {
    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            <div>
                Login page is here
            </div>
            <Link to={'/register'}>SIGN UP</Link>
        </div>
    );
};

export default LoginPage;