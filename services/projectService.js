import ProjectModel from "../server/models/project.model.js"

async function getAllProjects(){
    let allProjects = await ProjectModel.find({})
    allProjects = allProjects.map((project)=>{
        const { _id:id, image, description, title } = project
        return {
            id:id.toString(),
            image,
            description,
            title,
        }
    })
    return allProjects
}

export {
    getAllProjects
}