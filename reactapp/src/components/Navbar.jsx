import { useState } from "react";
import {
    Collapse,
    Navbar as RSNavbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from "reactstrap";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <RSNavbar color="dark" dark expand="md" className="navbar-sticky">
            <NavbarBrand href="#">
                <img src="/felicity.png" alt="Felicity '21" className="navbar-logo" />
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto text-uppercase" navbar>
                    <NavItem>
                        <NavLink href="#about">About Us</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#contact">Contact</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </RSNavbar>
    );
};

export default Navbar;
