import { combineReducers } from "redux";

import languageReducer from "./reducers/language";

const rootReducer = combineReducers({
    language:languageReducer
})

export default rootReducer
