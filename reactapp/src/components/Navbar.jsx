import { useState, useEffect, useRef } from "react";
import {
    Collapse,
    Navbar as RSNavbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from "reactstrap";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
    const navRef = useRef(null);

    const [isOpen, setIsOpen] = useState(false);
    const [isTransparent, setIsTransparent] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    useEffect(() => {
        document.addEventListener("scroll", () => {
            let scrolled = document.scrollingElement.scrollTop;
            if (scrolled >= (2 * window.innerHeight) / 3) {
                setIsTransparent(true);
            } else {
                setIsTransparent(false);
            }
        });
    }, []);

    return (
        <RSNavbar
            ref={navRef}
            color="dark"
            dark
            expand="md"
            className={`navbar-sticky ${!isTransparent ? "navbar-transparent" : "navbar-semi"}`}
            fixed="top"
        >
            <NavbarBrand href="#">
                {isTransparent && (
                    <img src="/felicity.png" alt="Felicity '21" className="navbar-logo" />
                )}
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto text-uppercase" navbar>
                    <NavItem>
                        <NavLink
                            tag={Link}
                            activeClass="active"
                            to="about"
                            spy={true}
                            offset={-40}
                            smooth={true}
                            duration={500}
                        >
                            About Us
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            tag={Link}
                            activeClass="active"
                            to="campus-reloaded"
                            spy={true}
                            offset={-40}
                            smooth={true}
                            duration={500}
                        >
                            Campus Reloaded
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            tag={Link}
                            activeClass="active"
                            to="contact"
                            spy={true}
                            offset={-40}
                            smooth={true}
                            duration={500}
                        >
                            Contact
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </RSNavbar>
    );
};

export default Navbar;
