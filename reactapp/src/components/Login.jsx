import React from "react";
import Keycloak from "keycloak-js";
import { Button } from "reactstrap";
import { connect } from "react-redux";

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = { keycloak: null, authenticated: false };
    }

    loginUser(keycloak){
        console.log(keycloak);
    }

    componentDidMount() {
        const keycloak = Keycloak("/keycloak.json");
        keycloak.init({ onLoad: "login-required" }).then(authenticated => {
            this.loginUser(keycloak);
            this.setState({ keycloak: keycloak, authenticated: authenticated });
        });
    }

    logOut() {
        console.log(this.state);
        this.state.keycloak.logout();
    }

    render() {
        if (this.state.keycloak) {
            if (this.state.authenticated) 
                return (
                    <div>
                        <p>This is a Keycloak-secured component of your application. You shouldnt be able
                to see this unless you ve authenticated with Keycloak.</p>
                        <Button onClick={ () => this.logOut() }> LOGOUT</Button>
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
    userInfo: state.keycloak,
});

const mapDispathToProps = dispatch => ({
    loginUser: keycloak => dispatch({ type: "LOGIN", keycloak }),
});

export default connect(mapStateToProps, mapDispathToProps)(Login);
