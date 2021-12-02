import HeaderContactSvg from "../../public/svg/HeaderContact.svg"

function Header(){
    return (
        <header className="header ">
            <div className="nav-contacts">
                    <div id="status-contact" className="contact d-none">
                        <div className="contact-item__chat">
                            <button className="contact-item__chat--link">
                                <span><span className="contact-item__chat--circle has-text-content"></span>online</span><span className="contact-item__chat--ready has-text-content">chat now</span>
                            </button>
                        </div>
                    </div>
                    <div className="contact contact-name d-none">
                        <a className="contact-name__link has-text-content">amir</a>
                    </div>
                    <div className="contact">
                        <HeaderContactSvg />
                    </div>
            </div>

            <nav className="nav-items">
                <div className="nav-item has-text-content"><a href="#aboutme">AboutMe</a></div>
                <div className="nav-item has-text-content"><a href="#skills">Skills</a></div>
                <div className="nav-item has-text-content"><a href="#resume">Resume</a></div>
                <div className="nav-item has-text-content"><a href="#contact">Contact</a></div>
                <div className="nav-item--mobile">
                    <svg className="bi bi-card-list nav-item--mobile__item" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
                        <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
                    </svg>
                </div>
            </nav>
            <div className="mobile-nav--items">
                <div className="mobile-nav--item has-text-content"><a href="#aboutme">AboutMe</a></div>
                <div className="mobile-nav--item has-text-content"><a href="#skills">Skills</a></div>
                <div className="mobile-nav--item has-text-content"><a href="#resume">Resume</a></div>
                <div className="mobile-nav--item has-text-content"><a href="#contact">Contact</a></div>
            </div>
        </header>
    )
}

export default Header