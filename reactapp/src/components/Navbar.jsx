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
import { Link } from "react-scroll";

const NavItem = ({ to, title }) => {
    return (
        <RSNavItem>
            <NavLink
                tag={Link}
                activeClass="active"
                to={to}
                spy={true}
                smooth={true}
                duration={500}
                className="mx-1 text-right"
            >
                {title}
            </NavLink>
        </RSNavItem >
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
            if (scrolled >= (window.innerHeight) / 10000) {
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
            <NavbarBrand href="/">
                <img
                    src="/felicity.png"
                    alt="Felicity '21"
                    className={`navbar-logo navbar-logo-${!isTransparent ? "hidden" : "visible"}`}
                />
            </NavbarBrand>
            <NavbarToggler onClick={toggle} className="border-0" />
            <Collapse isOpen={isOpen} navbar className="mt-3 px-3 pb-1 w-100 mt-md-0">
                <Nav className="ml-auto text-uppercase" navbar>
                    <NavItem to="about" title="About Us" />
                    <NavItem to="events" title="Events" />
                    <RSNavItem>
                        <NavLink
                            tag={Link}
                            activeClass="active"
                            to={"to"}
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="mx-1 text-right"
                        >
                            <Link to="/anna">
                                Workshop
                            </Link>
                        </NavLink>
                    </RSNavItem >
                    <NavItem to="contact" title="Contact" />
                </Nav>
            </Collapse>
        </RSNavbar>
    );
};

export default Navbar;
