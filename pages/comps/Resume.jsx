import Image from "next/image"
import { useTranslation } from "react-i18next"
import { useMemo } from "react"
import Slider from "react-slick";

function Resume(props){
    const { t } = useTranslation()
    const settings = useMemo(()=>({
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    }), [])

    return (
         <section id="resume">
            <h2 className="header-resume change-custom--selection">{t("Resume.Resume")}</h2>
            <Slider {...settings} className="image-slider">
                {props.projects.map(project=>{
                    return (
                        <div key={project.id} className="image-item">
                            <div className="image-item__icon">
                                <Image width={450} height={200} src={project.image} quality={100} alt="image"/>
                            </div>
                            <h1 unselectable="on" className="image-item__header has-text-content">{project.titleFa}</h1>
                            <p className="image-item__description has-text-content">{project.descriptionFa}</p>
                        </div>
                    )
                })}
            </Slider>
        </section>
    )
}

export default Resume