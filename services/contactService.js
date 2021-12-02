import ContactModel from "../server/models/contact.model.js"

async function addNewContact(body){
    try {
        const { email, name, phone, message, userIp, userAgent } = body
        let newContact = new ContactModel({ email, name, phone, message, userIp, userAgent })
        await newContact.save()
        return { hasError:false }       
    } catch (error) {
        return { hasError:true, error:error }
    }
}

export {
    addNewContact
}