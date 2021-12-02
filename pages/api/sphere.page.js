import { getSphereSkills } from "../../services/skillService.js"
import variables from "../../core/variables.js"

export default async function handler(req, res) {
    if(req.method!==variables.request.method.GET)
        return res.status(400).json({ message:variables.error.messages["400"] })
    try {
        const sphereSkills = await getSphereSkills()
        return res.status(200).json({skills:sphereSkills})
    } catch (error) {
        return res.status(400).json({ message:error.message })
    }
}