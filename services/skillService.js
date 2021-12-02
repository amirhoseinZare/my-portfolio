import SkillModel from "../server/models/skill.model.js"

async function getAllSkills(){
    let allSkills = await SkillModel.find({})
    allSkills = allSkills.map((skill)=>{
        const { _id:id, name, percent, showInSphere, showInProgress } = skill
        return {
            id:id.toString(),
            name,
            percent,
            showInProgress,
            showInSphere
        }
    })
    return allSkills
}

export {
    getAllSkills
}