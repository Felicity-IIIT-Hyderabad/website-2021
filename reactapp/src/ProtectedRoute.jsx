import { Route } from "react-router-dom";
import Home from "./components/Home";

function ProtectedRoute(props){
    if(props.loginInfo.userInfo.authenticated){
        return(
            <Route path={props.path}>{this.props.Component}</Route>
        );
    }
    else{
        return(
            <Route path="/">{Home}</Route>
        );
    }
}

export default ProtectedRoute;