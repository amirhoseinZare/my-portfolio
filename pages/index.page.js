import Head from 'next/head'
import Script from 'next/script'
import { useEffect } from 'react';

//css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//libs
import "../core/config/i18n";

//comps
import Hero from './comps/Hero.jsx'
import Header from "./comps/Header.jsx"
import Introduction from "./comps/Introduction.jsx"
import AboutMe from "./comps/AboutMe.jsx"
import Resume from "./comps/Resume.jsx"
import Pricing from "./comps/Pricing.jsx"
import Contact from "./comps/Contact.jsx"
import Footer from "./comps/Footer.jsx"
import Customize from "./comps/Customize.jsx"

//server & services
import {connectToDB} from "../server/db"
import {getAllSkills} from "../services/skillService.js"
import {getAllProjects} from "../services/projectService.js"
import LanguageService from '../services/languageService'

export default function Home(props) {

  useEffect(()=>{
  }, [])

  return (
    <main>

      <Head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="icon" type="image/svg+xml" href="./images/logo.svg" color="#ff0000" />
          <link rel="alternate icon" href="/images/logo.svg" />
          {/* <link strategy="beforeInteractive" rel="stylesheet" href="https://cdn.jsdelivr.net/gh/amirhoseinZare/my-portfolio@main/styles/bootstrap.css" /> */}
          {/* <link strategy="beforeInteractive" rel="stylesheet" href="https://cdn.jsdelivr.net/gh/amirhoseinZare/my-portfolio@main/styles/animate.css"/> */}
          <link rel="stylesheet" href="https://res.cloudinary.com/ddybs491a/raw/upload/v1641501291/globals_hoajf8.css" />
          {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/amirhoseinZare/my-portfolio@main/styles/slicker.css" /> */}
          <title>Amirhosein Zare</title>
          <meta name="description" content="Amirhosein Zare Portfolio" />
          <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Script strategy="beforeInteractive" src="https://cdn.jsdelivr.net/gh/amirhoseinZare/my-portfolio@main/scripts/jquery.3.5.1.js"/> */}
      {/* <Script strategy="beforeInteractive" src="https://cdn.jsdelivr.net/gh/amirhoseinZare/my-portfolio@main/scripts/slick.1.8.1.js"/>
      <Script strategy="afterInteractive" src="https://cdn.jsdelivr.net/gh/amirhoseinZare/my-portfolio@main/scripts/slider.js"/> */}
      <Script strategy="afterInteractive" src="https://res.cloudinary.com/ddybs491a/raw/upload/v1638459625/sphere_f2haf9.js"/>
      <Script strategy="afterInteractive" src="https://res.cloudinary.com/ddybs491a/raw/upload/v1640300227/document_yxuyxf.js"/>

      <Hero />
      <Header />
      <Introduction/>
      <AboutMe skills={props.skills.filter(skill=>skill.showInProgress)}/>
      <Resume projects={props.projects}/>
      <Pricing />
      <Contact />
      <Footer />
      <Customize />
      
    </main>
  )
}

export async function getStaticProps(){
  let allSkills = []
  let allProjects = []
  try {
    const db = await connectToDB()
    allSkills = await getAllSkills()
    allProjects = await getAllProjects()
  } catch (error) {
    console.log(error)
  }

  return {
    props:{
      skills:allSkills,
      projects:allProjects
    }
  }
}