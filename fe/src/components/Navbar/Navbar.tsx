import {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import cls from './navbar.module.css'
import NavbarLink from "./navbar-components/NavbarLink.tsx";
const Navbar = () => {
    const categories = ['music', 'celebrities', 'medicine', 'sport'];
    const [pickedCategory, setPickedCategory] = useState('sport');


    const randomizeCategory = () => {
        setPickedCategory(categories[Math.floor(Math.random() * 4)])
    }
    const exitHandler = () => {
        //some exit logic
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