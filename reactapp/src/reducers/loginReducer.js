const INITIAL_STATE = { "me":"bond", authenticated: false };

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
    case "LOGIN":
        var token = action.keycloak.idToken;
        console.log(action);
        localStorage.setItem("jwt",token);
        localStorage.setItem("user",JSON.stringify(action.keycloak));
        return { ...state, loginState: action.keycloak, authenticated: true };
    case "LOGOUT":
        localStorage.clear("jwt");
        localStorage.setItem("user", JSON.stringify(INITIAL_STATE));
        return { ...state, loginState: INITIAL_STATE, authenticated: false };        
    case "GET_USER":
        return JSON.parse(localStorage.getItem("user"));
    default: return state;
    }
};
