import i18next from "../core/config/i18n/index"
import UtilityService from "../services/utilityService"
import storageKeys from "../core/storageKeys"

export default class LanguageService {
    static toFa(){
        i18next.changeLanguage("fa")
        window.localStorage.setItem(storageKeys.language, UtilityService.encrypt("fa")) 
    }

    static toEn(){
        i18next.changeLanguage("en")
        window.localStorage.setItem(storageKeys.language, UtilityService.encrypt("fa")) 
    }

    static getCurrent(){
        if(process.browser)
            return UtilityService.decrypt(localStorage.getItem(storageKeys.language))
        return 
    }
}