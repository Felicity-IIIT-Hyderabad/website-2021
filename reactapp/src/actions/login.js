import store from "../store";

function loginUser(keycloak){
    console.log(keycloak);
    console.log("ME CALLED");
    store.dispatch({ type:"LOGIN", action: keycloak });
}

export default loginUser;