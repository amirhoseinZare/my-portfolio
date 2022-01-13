import { useTranslation } from "react-i18next"

function Introduction (){
    const { t } = useTranslation()
    return (
        <section id="introduction">
            <div className="introduction-header--container">
                <h1 className="introduction-header animate__animated animate__rubberBand has-text-content">{t("Introduction.Hello")}<span className="headet-text-color--picker has-text-content">{t("Introduction.FullName")}</span><br/>
                    <span className="headet-text-color--picker has-text-content">{t("Introduction.FrontEnd")}</span> {t("Introduction.WebDeveloper")}
                </h1>     
            </div>
            <p className="introduction-text has-text-content" >{t("Introduction.Description")}<br/>{t("Introduction.Seeking")}<span className="headet-text-color--picker has-text-content"><a href="#contact">{t("Introduction.ContactMe")}</a></span></p>
            <button className="introduction-button has-text-content">{t("Introduction.AboutMe")}</button>
        </section>
    )
}

export default Introduction