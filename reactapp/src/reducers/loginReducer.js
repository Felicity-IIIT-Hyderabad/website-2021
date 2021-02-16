export default (state = { "anna":"bond" }, action) => {
    switch(action.type) {
    case "LOGIN":
        console.log("AA");
        console.log(action.action.idTokenParsed);
        return { ...state, loginState: action.action.idTokenParsed };
    default: return state;
    }
};