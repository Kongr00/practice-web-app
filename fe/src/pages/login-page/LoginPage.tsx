import React from 'react';
import {Link} from "react-router-dom";
import {useAuth} from "../../context/AuthContext.tsx";


const LoginPage = () => {

    const {login} = useAuth();

    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            <div>
                Login page is here

                <button onClick={login}>LOGIN</button>
            </div>
            <Link to={'/register'}>SIGN UP</Link>
        </div>
    );
};

export default LoginPage;