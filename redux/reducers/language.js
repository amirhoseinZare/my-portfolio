import languageTypes from "../types/language";
import variables from "../../core/variables"

const INITIAL_STATE = {
    value:variables.defaultLanguage
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