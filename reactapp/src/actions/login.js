import store from "../store";

export function loginUser(keycloak){
    return store.dispatch({ type:"LOGIN", keycloak });
}

export function logoutUser(){
    return store.dispatch({ type:"LOGOUT" });
}

export function getUser(){
    return store.dispatch({ type:"GET_USER" });
}