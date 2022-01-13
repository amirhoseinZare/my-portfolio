import languageTypes from "../types/language"

const changeLanguage = (language) => ({
    type:languageTypes.CHANGE_LANGUAGE,
    payload:language
})

export {
    changeLanguage
}