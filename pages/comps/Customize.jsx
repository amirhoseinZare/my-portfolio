import { lang } from "../../config"
import { useTranslation } from "react-i18next"

function Customize(){
    const { t } = useTranslation()
    return (
         <div className="customize">
            <div className="customize-color">
                <div className="color-theme--items">
                    <div className="color-theme--item" data-id="0" style={{backgroundColor: "#741CE8"}}></div>
                    <div className="color-theme--item" data-id="3" style={{backgroundColor: "#072F4F"}}></div>
                    <div className="color-theme--item" data-id="1" style={{backgroundColor: "#E3455B"}}></div>
                    <div className="color-theme--item" data-id="2" style={{backgroundColor: "#F7CF3E"}}></div>
                    <div className="color-theme--item selected-custom--item" data-id="4" style={{backgroundColor: "#142F65"}}></div>
                </div>
                <p className="has-text-content change-custom--selection">{t("Customize.ColorTheme")}</p>
            </div>
            <div className="customize-language">
                <div className="lang--items">
                    <div onClick={()=>lang.toEn()} className="lang--item">
                        <img className="lang-item--icon selected-custom--item" data-lang="en" src="./images/en.png" alt="Fa" />
                    </div>
                    <div onClick={()=>lang.toFa()} className="lang--item">
                        <img className="lang-item--icon" data-lang="fa" src="./images/fa.png" alt="En" />
                    </div>
                </div>
                <p className="has-text-content change-custom--selection">{t("Customize.Language")}</p>
            </div>
        </div>
    )
}

export default Customize