async function getAllSkills(db){
    let allSkills = await db.models.Skill.find({})
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