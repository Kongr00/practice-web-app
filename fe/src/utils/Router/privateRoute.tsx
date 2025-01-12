import {Navigate, Outlet} from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar.tsx";

const PrivateRoute = () => {

    //=============== here must be some logic about verify jwt token ===============
    const auth = true;
    //=============== here must be some logic about verify jwt token ===============


    return (
        auth
            ? <div style={{display: 'flex', flexDirection: "column"}}>
                <Navbar/>
                <div style={{textAlign: 'center'}}>
                    <Outlet/>
                </div>
            </div>

            :  <Navigate to={'login'}></Navigate>

    );
};

export default PrivateRoute;