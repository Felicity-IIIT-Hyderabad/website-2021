import { useState, useEffect, useRef } from "react";
import {
    Collapse,
    Navbar as RSNavbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem as RSNavItem,
    NavLink,
} from "reactstrap";
import { Link, animateScroll as scroll } from "react-scroll";

const NavItem = ({ to, title }) => {
    return (
        <RSNavItem>
            <NavLink
                tag={Link}
                activeClass="active"
                to={to}
                spy={true}
                offset={-40}
                smooth={true}
                duration={500}
                className="mx-1"
            >
                {title}
            </NavLink>
        </RSNavItem>
    );
};

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
                <img
                    src="/felicity.png"
                    alt="Felicity '21"
                    className={`navbar-logo navbar-logo-${!isTransparent ? "hidden" : "visible"}`}
                />
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto text-uppercase" navbar>
                    <NavItem to="about" title="About Us" />
                    <NavItem to="campus-reloaded" title="Campus Reloaded" />
                    <NavItem to="events" title="Events" />
                </Nav>
            </Collapse>
        </RSNavbar>
    );
};

export default Navbar;
