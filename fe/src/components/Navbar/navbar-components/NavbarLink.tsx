import cls from '../navbar.module.css'
import {FC} from "react";
import {NavLink} from "react-router-dom";

interface NavbarLinkProps {
    to: string;
    children: React.ReactNode;
}

const NavbarLink: FC<NavbarLinkProps> = ({to, children}) => {
    return (
        <NavLink
            to={to}
            className={`    
                ${(isActive) => (isActive ? cls.activeNavLink : '')}
                ${cls.navLink} 
            `}>
            {children}
        </NavLink>
    );
};

export default NavbarLink;