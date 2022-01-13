import { useReducer, useMemo, useEffect, useState } from "react";
import validators , { validate } from "../../core/validators"
import strings from "../../core/strings"
import { useTranslation } from "react-i18next"
import i18n from "../../core/config/i18n"
import { useSelector } from "react-redux"

function Contact (){
    const language = useSelector(state=>state.language)
    const [validated, setValidated] = useState(false)
    const { t } = useTranslation()
    const inputNames = useMemo(
        () => ({
            name: {
                name: "name",
                validators: [validators.require()],
                label: strings.contact.name,
                isRequired: true,
            },
            mobile: {
                name: "mobile",
                validators: [validators.require(), validators.mobile()],
                label: strings.contact.mobile,
                isRequired: true,
            },
            message: {
                name: "message",
                validators: [validators.require()],
                label: strings.contact.message,
                isRequired: true,
            },
            email: {
                name: "email",
                validators: [validators.require(), validators.email()],
                label: strings.contact.email,
                isRequired: true,
            }
        }),
        []
    );

    const initState = useMemo(() => {
        let initState = {};
        for (let k of Object.keys(inputNames)) {
          switch (k) {
            default:
              initState[inputNames[k].name] = {
                value:  "",
                error: false,
                message: "",
              };
              break;
          }
        }
        return initState;
    }, []);

    const [input, setInput] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        initState
    );
    
    const onChange = (e) => {
        const { value, name } = e.target;
        setInput({ [name]: { value: value, error: false, message: "" } });
    };

    const validateModel = () => {
        let isValid = true;
        for (let k in inputNames) {
            let result = validate(input[k].value, inputNames[k].validators);
            if (!result.isValid) {
                isValid = false;
                setInput({
                    [k]: { value: input[k].value, error: true, message: t(result.message.key, result.message.args) },
                });
            }
        }
        if(!isValid)
            setValidated(true)
        return isValid;
    };

    const resetForm = ()=>{
        for (let k of Object.keys(inputNames)) {
            setInput({
                [k]: { value: '', error: false, message: '' },
            });
        }
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        if (!validateModel()) return;
        let model = Object.keys(inputNames).reduce(
            (acc, k) => ({ ...acc, [k]: input[k].value }),
                {}
        );
        //sen request
        resetForm()
    }

    useEffect(()=>{
        console.log(validated)
        if(!validated)
            return
        validateModel()
    }, [language])

    return (
        <section id="contact">
            <p>{i18n.t("validation.required")}</p>
            <h3 className="contact-form__header has-text-content change-custom--selection">{t("Contact.GetInTouch")}</h3>
            <div className="contact-form">
                <form noValidate onSubmit={submitHandler}>
                    <div className="contact-form__name__email">
                        <div className="contact-form__name__email-items has-text-content" >
                            <div className="contact-form__label has-text-content"><label className="input-text-color--picker has-text-content change-custom--selection" htmlFor={inputNames.email.name}>{t("Contact.Email")}</label></div>
                            <input id={inputNames.email.name} type="email" className="contact-form__email" name={inputNames.email.name} required onChange={onChange} />
                            {input.email.error && <div className="form-invalid--feedback">{input.email.message}</div>}
                        </div>
                        <div  className="contact-form__name__email-items has-text-content" style={{textAlign: "right"}}>
                            <div className="contact-form__label has-text-content"><label className="input-text-color--picker has-text-content change-custom--selection" htmlFor={inputNames.name.name}>{t("Contact.Name")}</label></div>
                            <input id={inputNames.name.name} type="text" className="contact-form__name" name={inputNames.name.name} required onChange={onChange} />
                            {input.name.error && <div className="form-invalid--feedback">{input.name.message}</div>}
                        </div>
                    </div>
                    <div className="contact-form__title has-text-content">
                        <div className="contact-form__title--items has-text-content">
                            <label htmlFor="form-contact__title" className="input-text-color--picke has-text-contentr change-custom--selection" style={{ color: 'var(--header-bg-colour)'}}>{t("Contact.Phone")}</label>
                        </div>
                        <div className="contact-form__title--items" style={{direction: "ltr !important"}}>
                            <input id="form-contact__title" type="number" className="form-contact__title" name={inputNames.mobile.name} required onChange={onChange} />
                            {input.mobile.error && <div className="form-invalid--feedback">{input.mobile.message}</div>}
                        </div>
                    </div>
                    <div className="contact-form__message has-text-content">
                        <div className="contact-form__label has-text-content">
                            <label className="input-text-color--picker has-text-content change-custom--selection" htmlFor="contactMessage">{t("Contact.Message")}</label>
                        </div>
                        <textarea id="contactMessage" cols="30" rows="10" name={inputNames.message.name} required onChange={onChange}></textarea>
                        {input.message.error && <div className="form-invalid--feedback">{input.message.message}</div>}
                    </div>
                    <button type="submit" className="form-contact__button change-custom--selection">{t("Contact.Send")}</button>
                </form>
            </div>
        </section>
    )
}

export default Contact