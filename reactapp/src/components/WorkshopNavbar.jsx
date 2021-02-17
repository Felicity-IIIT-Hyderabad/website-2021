import { useState, useEffect, useRef } from "react";
import {
    Collapse,
    Navbar as RSNavbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem as RSNavItem,
    NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem 
} from "reactstrap";
import { connect } from "react-redux";
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
                duration={10}
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
        return "Welcome \t" + props.props.userInfo.loginReducer.idTokenParsed.given_name + "\t" + props.props.userInfo.loginReducer.idTokenParsed.family_name;
    }
    catch{
        return "";
    }
}

const WorkshopNavbar = (props) => {
    const navRef = useRef(null);

    const [isOpen, setIsOpen] = useState(false);
    const [isEventsOpen, setIsEventsOpen] = useState(false);
    const [isTransparent, setIsTransparent] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    const toggleEvents = () => setIsEventsOpen(!isEventsOpen);

    useEffect(() => {
        document.addEventListener("scroll", () => {
            // let scrolled = document.scrollingElement.scrollTop;
            setIsTransparent(true);
        });
    }, []);

    return (
        <RSNavbar
            ref={navRef}
            color="light"
            light
            expand="md"
            className={`navbar-sticky ${!isTransparent ? "navbar-transparentt" : "navbar-semii"}`}
            fixed="top"
        >
            <NavbarBrand href="/">
                <img
                    src="/iiit.png"
                    alt="Felicity '21"
                    className={`navbar-logo navbar-logo-${!isTransparent ? "visible" : "visible"}`}
                />
            </NavbarBrand>
            <div className="text-center">
                <NavbarBrand href="/">
                    <img
                        src="../felicityblack_cropped.png"
                        alt="Felicity '21"
                        className={`navbar-logo navbar-logo-${!isTransparent ? "visible" : "visible"}`}
                    />
                </NavbarBrand>            
            </div>            
            <NavbarToggler onClick={toggle} className="border-0" />
            <Collapse isOpen={isOpen} navbar className="mt-3 px-3 pb-1 w-100 mt-md-0">
                <Nav className="ml-auto text-uppercase" navbar>
                    <NavItem title={func(props)} />
                    <NavItem2 to="/" title="Home" />
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

                    <NavItem2 to="/workshop" title="Workshop" />
                    <NavItem2 to="/sponsors" title="Sponsors" />
                    <NavItem2 to="/our-team" title="Our Team" />
                    <NavItem to="contact" title="Contact" />               
                </Nav>
            </Collapse>
        </RSNavbar>
    );
};

export default connect()(WorkshopNavbar);
