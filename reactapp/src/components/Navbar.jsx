import { useState, useEffect, useRef } from "react";
import {
    Collapse,
    Button,
    Navbar as RSNavbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem as RSNavItem,
    NavLink,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
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
        </RSNavItem>
    );
};

const NavItem2 = ({ to, title }) => {
    return (
        <RSNavItem>
            <NavLink href={to} spy={true} smooth={true} duration={500} className="mx-1 text-right">
                {title}
            </NavLink>
        </RSNavItem>
    );
};

function func(props) {
    try {
        if (props.props.userInfo.loginReducer.authenticated)
            return (
                "Welcome \t" +
                props.props.userInfo.loginReducer.idTokenParsed.given_name +
                "\t" +
                props.props.userInfo.loginReducer.idTokenParsed.family_name
            );
        else {
            return "";
        }
    } catch {
        return "";
    }
}

function displayInOrOut(props) {
    try {
        if (props.props.userInfo.loginReducer.authenticated) return "LOGOUT";
        else {
            return "LOGIN";
        }
    } catch {
        return " LOGIN";
    }
}

function logInOrOut(props) {
    try {
        if (props.props.userInfo.loginReducer.authenticated) {
            // window.location.href="/";
            logoutUser();
            window.location.href = "https://felicity.iiit.ac.in/auth/realms/master/protocol/openid-connect/logout?redirect_uri=https%3A%2F%2Ffelicity.iiit.ac.in";
        } else {
            if( localStorage.getItem("user") == null || localStorage.getItem("user") == undefined ||  !JSON.parse(localStorage.getItem("user"))["authenticated"]){
                localStorage.setItem("prevURL",window.location.href);
                window.location.href="/login";            
                // localStorage.setItem("prevURL",window.location.href);
            }
            window.location.href = "/login";
        }
    } catch {
        window.location.href = "/login";
        return "LOGIN";
    }
}

function renderEvents(props, isEventsOpen, toggleEvents){
    try{
        if (!props.props.userInfo.loginReducer.authenticated) {
            return(
                <></>
            );
        }
        else{
            return(
                <RSNavItem style={{ color:"white" }}>
                    <NavLink
                    >
                        <Dropdown isOpen={isEventsOpen} toggle={toggleEvents}>
                            <DropdownToggle
                                tag="span"
                                data-toggle="dropdown"
                                aria-expanded={isEventsOpen}
                            >
                                Events
                            </DropdownToggle>
                            <DropdownMenu style={{ backgroundColor: "white" }}>
                                <DropdownItem style={{ color: "black" }} onClick={() => window.location.href="/events"}>Home</DropdownItem>
                                <DropdownItem style={{ color: "black" }} onClick={() => window.location.href="/events-megapage"}>Mega Events</DropdownItem>
                                <DropdownItem style={{ color: "black" }} onClick={() => window.location.href="/events-technical"}>Technical Timeline</DropdownItem>
                                <DropdownItem style={{ color: "black" }} onClick={() => window.location.href="/events-cultural"}>Cultural Timeline</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </NavLink>                     
                </RSNavItem>
            );
        }
    }
    catch{
        return(
            <></>
        );
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
            if (scrolled >= window.innerHeight / 10000) {
                setIsTransparent(true);
            } else {
                setIsTransparent(false);
            }
        });
    }, []);

    function renderHome(props){
        var str = "https://felicity.iiit.ac.in/";
        if(window.location.href.split("/").length >= 4 && window.location.href.split("/")[3] != ""){
            return (
                <NavItem2 to="/" title="Home" />                
            );
        }
        else{
            return (
                <></>
            );
        }
    }

    return (
        <RSNavbar
            ref={navRef}
            color="dark"
            dark
            expand="md"
            className={`navbar-sticky ${!isTransparent ? "navbar-transparent" : "navbar-semi"}`}
            fixed="top"
        >
            <div className={`navbar-shade shade-${isOpen ? "visible" : "invisible"}`} />
            <NavbarBrand href="/">
                <img
                    src="/felicity.png"
                    alt="Felicity '21"
                    className={`navbar-logo navbar-logo-${!isTransparent ? "hidden" : "visible"}`}
                />
            </NavbarBrand>
            <NavbarToggler onClick={toggle} className="border-0" />
            <Collapse isOpen={isOpen} navbar className="mt-3 px-3 pb-1 w-100 mt-md-0" style={{ fontSize:"1.5rem", color:"#000000" }}>
                <Nav className="ml-auto text-uppercase nav-mobile-big" navbar>
                    <NavItem title={func(props)} />
                    {renderHome(props)}                    
                    {renderEvents(props, isEventsOpen, toggleEvents)}
                    <NavItem2 to="/workshop" title="Workshop" />
                    <NavItem2 to="/sponsors" title="Sponsors" />
                    <NavItem2 to="https://www.meraevents.com/event/felicity-tshirt" title="Shop" />
                    <NavItem2 to="/myteams" title="Check Responses" />
                    <NavItem2 to="/our-team" title="Our Team" />
                    <NavItem2 to="/help" title="Help" />
                    <div className="text-right">
                        <Button
                            type="button"
                            color="dark"
                            onClick={() => logInOrOut(props)}
                            className="ml-2 font-weight-bold px-3 mt-4 mt-md-0"
                            style={{ fontSize: "0.9em" }}
                        >
                            {displayInOrOut(props)}
                        </Button>
                    </div>
                </Nav>
            </Collapse>
        </RSNavbar>
    );
};

export default connect()(Navbar);
