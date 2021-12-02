export default function Customize(){
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
                <p className="has-text-content change-custom--selection">color theme</p>
            </div>
            <div className="customize-language">
                <div className="lang--items">
                    <div className="lang--item">
                        <img className="lang-item--icon selected-custom--item" data-lang="en" src="./images/en.png" alt="Fa" />
                    </div>
                    <div className="lang--item">
                        <img className="lang-item--icon" data-lang="fa" src="./images/fa.png" alt="En" />
                    </div>
                </div>
                <p className="has-text-content change-custom--selection">language</p>
            </div>
        </div>
    )
}