import {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import cls from './navbar.module.css'
import NavbarLink from "./navbar-components/NavbarLink.tsx";
import {useAuth} from "../../context/AuthContext.tsx";
const Navbar = () => {

    const [pickedCategory, setPickedCategory] = useState('sport');
    const {logout} = useAuth()

    const categories = ['music', 'celebrities', 'medicine', 'sport'];

    const randomizeCategory = () => {
        setPickedCategory(categories[Math.floor(Math.random() * 4)])
    }
    const exitHandler = () => {
        //some exit logic
        logout();
        console.log("EXITED")
    }

    return (
        <div className={cls.navbar}>
            <div onClick={exitHandler} className={cls.navLink}>EXIT</div>

            <div className={cls.navbarButtons}>
                <NavbarLink to={'home'}>HOME</NavbarLink>
                <div onClick={randomizeCategory}>
                    <NavbarLink to={`category/${pickedCategory}`}>RANDOM CATEGORY</NavbarLink>
                </div>
                <NavbarLink to={'profile'}>PROFILE</NavbarLink>
            </div>
        </div>
    );
};

export default Navbar;