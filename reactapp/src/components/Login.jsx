import React from "react";
import Keycloak from "keycloak-js";
import { Button, Col, Row } from "reactstrap";
import { connect } from "react-redux";

import { loginUser, logoutUser } from "../actions/login";

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
            console.log("AAAAAA");
            this.state.keycloak.logOut();
            this.setState({
                authenticated:false
            });
        }
        const keycloak = Keycloak("/keycloak.json");
        keycloak.init({ onLoad: "login-required" }).then(authenticated => {
            console.log(this.props);
            this.setState({ keycloak: keycloak, authenticated: authenticated });
        }).then(()=>{
            console.log(this.props);
            console.log(this.props.loginUser(keycloak));
            window.location.href="/";
        });
    }

    logOut() {
        console.log(this.state);
        this.state.keycloak.logout();
        this.props.logout();
    }

    render() {
        if (this.state.keycloak) {
            if (this.state.authenticated)
                return (
                    <div>
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
            <div>Initializing Keycloak...
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

const mapDispatchToProps = () => ({
    loginUser: loginUser,
    logoutUser: logoutUser
});

export default connect(mapStateToProps,mapDispatchToProps)(Login);