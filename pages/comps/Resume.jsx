import Image from "next/image"
import { useTranslation } from "react-i18next"

function Resume(props){
    const { t } = useTranslation()
    return (
         <section id="resume">
            <h2 className="header-resume change-custom--selection">{t("Resume.Resume")}</h2>
            <div className="image-slider"  data-slick='{"slidesToShow": 3, "slidesToScroll": 3}' style={{display:"flex", justifyContent:"center"}}>
                {props.projects.map(project=>{
                    return (
                        <div key={project.id} className="image-item">
                            <div className="image-item__icon">
                                <Image width={450} height={200} src={project.image} quality={100}/>
                            </div>
                            <h1 unselectable="on" className="image-item__header has-text-content">{project.titleFa}</h1>
                            <p className="image-item__description has-text-content">{project.descriptionFa}</p>
                        </div>
                    )
                })}
                
            </div>
        </section>
    )
}

export default Resume