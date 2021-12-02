import { getSphereSkills } from "../../services/skillService.js"

export default async function handler(req, res) {
    try {
        const sphereSkills = await getSphereSkills()
        console.log(sphereSkills)
        res.status(200).json({skills:sphereSkills})
    } catch (error) {
        console.log(error)
        res.status(400).json({ message:error.message })
    }
}