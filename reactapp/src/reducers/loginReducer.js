export default (state = { "me":"bond" }, action) => {
    switch(action.type) {
    case "LOGIN":
        console.log("AA");
        console.log(action);
        var token = action.keycloak.idToken;
        console.log(token);
        localStorage.setItem("jwt",token);
        localStorage.setItem("user",JSON.stringify(action.keycloak));
        console.log(JSON.stringify(action.keycloak));
        // console.log({ ...state, loginState: action.action.idTokenParsed });
        return { ...state, loginState: action.keycloak };
    case "GET_USER":
        return JSON.parse(localStorage.getItem("user"));
    default: return state;
    }
};
