import languageTypes from "../types/language";

const INITIAL_STATE = {
    value:"Fa"
}

const languageReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case languageTypes.CHANGE_LANGUAGE:{
           return { value: action.payload }
        }
        default:
            return state;
    }
}

export default languageReducer