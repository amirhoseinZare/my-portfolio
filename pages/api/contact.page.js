import { addNewContact } from "../../services/contactService.js"
import variables from "../../core/variables.js"

export default async function handler(req, res) {
    if(req.method!==variables.request.method.POST)
        return res.status(400).json({ message:variables.error.messages["400"] })
    const ip = req.ip || req.headers['x-forwarded-for'] || variables.general.unknownIp
    const userAgent = req.headers['User-Agent'] || variables.general.unknownUserAgent

    const result = await addNewContact({...req.body, userIp:ip, userAgent})
    if(result.hasError){
        console.log(result.error)
        return res.status(400).json({ message:variables.error.messages["400"] })
    }
    return res.status(200).json({ message:variables.request.response["200"] })
}