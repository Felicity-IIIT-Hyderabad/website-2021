const INITIAL_STATE = {
    loginState: "",
};

function loginReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
    case "LOGIN":
        console.log("AA");
        return { ...state, loginState: action.loginState };
    default: return state;
    }
}

export default loginReducer;