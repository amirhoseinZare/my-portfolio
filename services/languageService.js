import i18next from "../core/config/i18n/index"
import UtilityService from "../services/utilityService"
import storageKeys from "../core/storageKeys"
import store from "../redux/store"
import { changeLanguage } from "../redux/actions/language"

export default class LanguageService {
    static toFa(){
        i18next.changeLanguage("fa")
        window.localStorage.setItem(storageKeys.language, UtilityService.encrypt("fa"))
        store.dispatch(changeLanguage("fa"))
    }

    static toEn(){
        i18next.changeLanguage("en")
        window.localStorage.setItem(storageKeys.language, UtilityService.encrypt("en"))
        store.dispatch(changeLanguage("en"))
    }

    static getCurrent(){
        if(process.browser)
            return UtilityService.decrypt(localStorage.getItem(storageKeys.language))
        return 
    }
}