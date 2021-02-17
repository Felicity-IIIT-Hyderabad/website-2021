import { useState, useEffect, useRef } from "react";
import {
    Collapse,
    Button,
    Navbar as RSNavbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem as RSNavItem,
    NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem 
} from "reactstrap";
import { connect } from "react-redux";
import { Link } from "react-scroll";

import { logoutUser } from "../actions/login";

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

const NavItem2 = ({ to, title }) => {
    return (
        <RSNavItem>
            <NavLink
                href={to}
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

function func(props){
    try{
        if(props.props.userInfo.loginReducer.authenticated)
            return "Welcome \t" + props.props.userInfo.loginReducer.idTokenParsed.given_name + "\t" + props.props.userInfo.loginReducer.idTokenParsed.family_name;
        else{
            return "";
        }
    }
    catch{
        return "";
    }
}

function displayInOrOut(props){
    try{
        if(props.props.userInfo.loginReducer.authenticated)
            return "LOGOUT";
        else{
            return "LOGIN";
        }
    }
    catch{
        return "LOGIN";
    }
}

function logInOrOut(props){
    try{
        if(props.props.userInfo.loginReducer.authenticated)
        {
            // window.location.href="/";
            logoutUser();
            window.location.href="/";
        }
        else{
            window.location.href="/login";
        }
    }
    catch{
        window.location.href="/login";
        return "LOGIN";
    }
}


const Navbar = (props) => {
    const navRef = useRef(null);

    const [isOpen, setIsOpen] = useState(false);
    const [isEventsOpen, setIsEventsOpen] = useState(false);
    const [isTransparent, setIsTransparent] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    const toggleEvents = () => setIsEventsOpen(!isEventsOpen);

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
                    <NavItem title={func(props)} />
                    <RSNavItem>
                        <NavLink>
                            <Dropdown isOpen={isEventsOpen} toggle={toggleEvents}>
                                <DropdownToggle
                                    tag="span"
                                    data-toggle="dropdown"
                                    aria-expanded={isEventsOpen}
                                >
                                    Events
                                </DropdownToggle>
                                <DropdownMenu style={{ backgroundColor: "black" }}>
                                    <DropdownItem style={{ color: "grey" }}><a href="/events">Main</a></DropdownItem>
                                    <DropdownItem style={{ color: "grey" }}><a href="/events-technical">Technical</a></DropdownItem>
                                    <DropdownItem style={{ color: "grey" }}><a href="/events-cultural">Cultural</a></DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </NavLink>                     
                    </RSNavItem>

                    <NavItem2 to="/team" title="Teams" />
                    <NavItem2 to="/workshop" title="Workshop" />
                    <NavItem2 to="/sponsors" title="Sponsors" />
                    <NavItem to="contact" title="Contact" />
                    <Button
                        type="button"
                        color="dark"
                        onClick={() => logInOrOut(props)}
                        className="mr-2 font-weight-bold px-3"
                    >
                        {displayInOrOut(props)}
                    </Button>                    
                </Nav>
            </Collapse>
        </RSNavbar>
    );
};

export default connect()(Navbar);
