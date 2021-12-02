import SkillModel from "../server/models/skill.model.js"

function mapSkills(skills){
    return skills.map((skill)=>{
        const { _id:id, name, percent, showInSphere, showInProgress } = skill
        return {
            id:id.toString(),
            name,
            percent,
            showInProgress,
            showInSphere
        }
    })
}

async function getAllSkills(){
    let allSkills = await SkillModel.find({})
    allSkills = mapSkills(allSkills)
    return allSkills
}

async function getSphereSkills(){
    let allSphereSkills = await SkillModel.find({ showInSphere:true })
    allSphereSkills = mapSkills(allSphereSkills)
    return allSphereSkills
}

export {
    getAllSkills,
    getSphereSkills,
    mapSkills
}