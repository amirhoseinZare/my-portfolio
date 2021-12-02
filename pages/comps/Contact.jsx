function Contact (){
    return (
        <section id="contact">
            <h3 className="contact-form__header has-text-content change-custom--selection">Get in touch</h3>
            <div className="contact-form">
                <form noValidate>
                    <div className="contact-form__name__email">
                        <div className="contact-form__name__email-items has-text-content" >
                            <div className="contact-form__label has-text-content"><label className="input-text-color--picker has-text-content change-custom--selection" htmlFor="contact-form__email">email</label></div>
                            <input id="contact-form__email" type="email" className="contact-form__email" name="email" required />
                            <div className="form-invalid--feedback">feedback</div>
                        </div>
                        <div  className="contact-form__name__email-items has-text-content" style={{textAlign: "right"}}>
                            <div className="contact-form__label has-text-content"><label className="input-text-color--picker has-text-content change-custom--selection " htmlFor="contact-form__name ">name</label></div>
                            <input id="contact-form__name" type="text" className="contact-form__name" name="name" required />
                            <div className="form-invalid--feedback">feedback</div>
                        </div>
                    </div>
                    <div className="contact-form__title has-text-content">
                        <div className="contact-form__title--items has-text-content">
                            <label htmlFor="form-contact__title" className="input-text-color--picke has-text-contentr change-custom--selection">phone</label>
                        </div>
                        <div className="contact-form__title--items" style={{direction: "ltr !important"}}>
                            <input id="form-contact__title" type="phone" className="form-contact__title" name="phone" required />
                            <div className="form-invalid--feedback">feedback</div>
                        </div>
                    </div>
                    <div className="contact-form__message has-text-content">
                        <div className="contact-form__label has-text-content">
                            <label className="input-text-color--picker has-text-content change-custom--selection" htmlFor="contactMessage">message</label>
                        </div>
                        <textarea id="contactMessage" cols="30" rows="10" name="message" required ></textarea>
                        <div className="form-invalid--feedback">feedback</div>
                    </div>
                    <button type="submit" className="form-contact__button change-custom--selection">send</button>
                </form>
            </div>
        </section>
    )
}

export default Contact