import { useTranslation } from "react-i18next"

function Footer(){
    const { t } = useTranslation()
    return(
        <footer id="footer">
            <div className="footer-items">
                <div className="footer-item cursor-default has-text-content"><a href="https://www.instagram.com/amir.deve/">{t("Footer.Linkedin")}</a></div>
                <div className="footer-item cursor-default has-text-content"><a href="https://github.com/amirhussein-zare">{t("Footer.GitHub")}</a></div>
                <div className="footer-item cursor-default has-text-content"><a href="mailto:zareamirhussein@gmail.com">{t("Footer.Email")}</a></div>
                <div className="footer-item cursor-default has-text-content"><a href="tel:09035193426">{t("Footer.Mobile")}</a></div>
            </div>
        </footer>
    )
}

export default Footer