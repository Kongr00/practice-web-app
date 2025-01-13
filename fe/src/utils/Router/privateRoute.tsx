import {Navigate, Outlet} from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar.tsx";
import {useAuth} from "../../context/AuthContext.tsx";

const PrivateRoute = () => {

    //=============== here must be some logic about verify jwt token ===============
    const {isAuthenticated} = useAuth();
    //=============== here must be some logic about verify jwt token ===============


    return (
        isAuthenticated
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