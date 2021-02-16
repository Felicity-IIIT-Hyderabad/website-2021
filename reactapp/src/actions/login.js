import store from "../store";

export function loginUser(keycloak){
    console.log(keycloak);
    console.log("ME CALLED");
    return store.dispatch({ type:"LOGIN", keycloak });
}

export function getUser(){
    return store.dispatch({ type:"GET_USER" });
}