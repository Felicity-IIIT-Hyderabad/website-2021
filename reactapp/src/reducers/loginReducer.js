const INITIAL_STATE = { "me":"bond", authenticated: false };

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
    case "LOGIN":
        console.log("AA");
        console.log(action);
        var token = action.keycloak.idToken;
        localStorage.setItem("jwt",token);
        localStorage.setItem("user",JSON.stringify(action.keycloak));
        return { ...state, loginState: action.keycloak, authenticated: true };
    case "LOGOUT":
        localStorage.clear("jwt");
        localStorage.setItem("user", JSON.stringify(INITIAL_STATE));
        console.log("DDD");
        return { ...state, loginState: INITIAL_STATE, authenticated: false };        
    case "GET_USER":
        console.log(JSON.parse(localStorage.getItem("user")));
        return JSON.parse(localStorage.getItem("user"));
    default: return state;
    }
};
