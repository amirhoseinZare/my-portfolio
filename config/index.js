import i18next from "./i18n/index"

const chngLangToFa = ()=>i18next.changeLanguage("fa")
const chngLangToEn = ()=>i18next.changeLanguage("en")

const lang = {
    ToFa:chngLangToFa,
    ToEn:chngLangToEn
}

export {
    lang
}