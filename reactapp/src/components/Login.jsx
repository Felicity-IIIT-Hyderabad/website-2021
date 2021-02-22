import React from "react";
import Keycloak from "keycloak-js";
import { Button, Col, Row } from "reactstrap";
import { connect } from "react-redux";

// import { loginUser, logoutUser } from "../actions/login";

function func(props){
    try{
        return props.keycloak.idTokenParsed.family_name + "\t" + props.keycloak.idTokenParsed.given_name;
    }
    catch{
        return "Hello";
    }
}

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = { keycloak: null, authenticated: false };
    }

    componentDidMount() {
        if(this.state.authenticated){
            this.state.keycloak.logOut();
            this.setState({
                authenticated:false
            });
        }
        const keycloak = Keycloak("/keycloak.json");
        keycloak.init({ onLoad: "login-required" }).then(authenticated => {
            this.setState({ keycloak: keycloak, authenticated: authenticated });
        }).then(()=>{
            this.props.loginUser(keycloak);
            window.location.href="/events";
        });
    }

    logOut() {
        this.state.keycloak.logout();
        this.props.logout();
    }

    render() {
        if (this.state.keycloak) {
            if (this.state.authenticated)
                return (
                    <div className="text-center text-white">
                        <p>Welcome {func(this.state)}!</p>
                        <Row>
                            <Col md={2}>
                                <Button onClick={ () => window.location.href="/" }> GO BACK</Button>
                            </Col>
                            <Col md={2}>
                                <Button onClick={ () => this.logOut() }> LOGOUT</Button>
                            </Col>
                        </Row>
                    </div>
                ); else return (<div>Unable to authenticate!</div>);
        }
        return (
            <div className="text-center text-white">Initializing Keycloak...
                <Button onClick={ () => this.logOut() }> LOGOUT</Button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    userInfo: state,
});

// const mapDispatchToProps = dispatch => {
//     return {
//         actions: bindActionCreators({ loginUser }, dispatch)
//     };
// };

const mapDispatchToProps = dispatch => ({
    loginUser: (keycloak) => dispatch({ type: "LOGIN", keycloak }),
    logoutUser: () => dispatch({ type: "LOGOUT" })
});

export default connect(mapStateToProps,mapDispatchToProps)(Login);
