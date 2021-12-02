const statusContact = document.getElementsByClassName("contact-item__chat--link")[0]
let statusContactInnerHtml
const statusBtnCircle = document.querySelector(".contact-item__chat--circle")
const statusBtnReadyText  = document.querySelector(".contact-item__chat--ready")
const headerDIv = document.getElementsByClassName("header")[0]
const aboutmePicturePerson = document.getElementsByClassName("aboutme--picture__person")[0]
const aboutmePicturePattern = document.getElementsByClassName("aboutme--picture__pattern")[0]
const introductionHeader = document.getElementsByClassName("introduction-header")[[0]]
const pricingItems = [...document.getElementsByClassName("pricing-item")]
const navItems = [...document.getElementsByClassName("nav-item")]
const navItemsContainer = document.getElementsByClassName("nav-items")[0]
const aboutMeDescription = document.getElementsByClassName("aboutme--description")[0]
const mobileNavItemsDiv = document.querySelector(".mobile-nav--items")
const maobileNavItemDiv = document.querySelectorAll(".mobile-nav--item")
const mobilNavButton = document.querySelector(".nav-item--mobile__item")
const introductionButton = document.getElementsByClassName('introduction-button')[0]
const langItemIcons = [...document.getElementsByClassName('lang-item--icon')]
const colorItemIcons = [...document.getElementsByClassName('color-theme--item')]
const colorCustomProperties = {
  "--pricing-item-up-colour-1":['rgba(43, 45, 172, 0.3)','rgba(65,49,79, 0.3)','rgba(196,194,192, 0.3)','rgba(185,36,2, 0.3)','rgba(149, 202, 204, 0.3)'],
  "--pricing-item-up-colour-2":['rgba(116,28,232,0.4)','rgba(227,69,91, 0.3)','rgba(229,228,55,0.4)','rgba(129,55,114,0.4)','rgba(97, 192, 236, 0.4)'],
  "--pricing-item-up-colour-3":['rgba(243,200,1,0.6)','rgba(247, 223, 120, 0.6)','rgba(243,200,1,0.6)','rgba(235, 213, 116, 0.6)','rgba(235, 207, 86, 0.6)'],
  "--form-button-hover-colour":['#4129BD','#39394b','#2c3d44','#9c3888','rgb(43, 14, 185)'],
  "--abuotme-header-colour":['#451F96','#E3455B','#ffcf1f','#B82501','#150734'],
  "--tagcloud--item-colour":['#461F99','#f3919e','#1A292F','#813772','#150734'],
  "--description-picker-colour":['#6C1AD9','#C1B499','#C4C2C0','#B82501','#3778C2'],
  "--form-button-colour":['#5B43D6','#24242F','#1A292F','#8a3078','#28559A'],
  "--header-bg-colour":['#741CE8','#41314F','#0B1511','#072F4F','#0F2557'],
  "--hero-background-colour":['#6843B1','#696283','#2a4149','#662c5a','#3778C2'],
  "--image-slider-colour":['#428DFF','#E3455B','#ffdc0d','#9c3888','#150734'],
  "--input-placeholder-colour":['rgb(146,148,213)','rgb(146,148,213)','#1A292F','rgb(146,148,213)','rgb(146,148,213)'],
  "--contact-chat-ready--colour":['#000','#fff','#000','#fff','#fff'],
  "--intro-button-colour":['#555353','#fff','#555353','#fff','#555353'],
  "--footer-item-colour":['#a7a7a7','#a7a7a7','#a7a7a7','#a7a7a7','#6688CC'],
  "--nav-item-colour":['#fff','#fff','#fff','#fff','#fff'],
  "--chat-circle--colour":['#9bff00','#cbfa85','#9bff00','#9bff00','#9bff00'],
  "--nav--item-hover-colour":['#F3C801','#E3455B','#F6CF43','#B62602','#00ABE1'],
  "--chat-link-item-colour":['#ffdc0d','#f3919e','#ffdc0d','#9c3888','#3778C2'],
  "--intro-button-bg-Colour":['#f2bf00','#E3455B','#F7CF3E','#813772','#8ae8ff'],
  "--intro-button-bg-hover-colour":['#ffcf1f','#995D6F','#ffcf1f','#9c3888','#63BCE5'],
  "--gradient-start-colour":['#7a19f1','#24242F','#0B1511','#072F4F','#0F2557'],
  "--gradient-end-colour":['#332179','#41314F','#1c1f20','#000','#28559A'],
  "--contact-item__chat--link-colour":['#671bd1','#E3455B','#ffdc0d','#B62602','#63BCE5'],
  "--main-text-colour":['#000','#000','#000','#000','#141824'],
  "--picture-pattern-item":['#3E208B','#24242F','#F7CF3F','#072F4F','#28559A']
}
const colorThemeItems = [...document.getElementsByClassName('color-theme--items')[0].children]
const languageItemIcons = [...document.getElementsByClassName('lang-item--icon')]
const textIncludedElements = [...document.getElementsByClassName('has-text-content')]
let chosenLanguage = 'en'
let dynamicStrings = {
  tmplateBase:[
    {
      element:document.getElementById('introduction'),
      template:`<div class="introduction-header--container"><h1 class="introduction-header animate__animated animate__rubberBand has-text-content">{}<span class="headet-text-color--picker has-text-content">{}</span></span><br/><span class="headet-text-color--picker has-text-content">{}</span>{}</h1></div><p class="introduction-text has-text-content" >{}<span class="headet-text-color--picker has-text-content">{}<a href="#contact"></a></span></p><button class="introduction-button has-text-content">{}</button>`,
      text:{
        en:["Hi I'm ", "Amirhossein Zare", "Front-End", " web developer", "I'm interested and experienced in web development . If you're a business <br/>seeking a web presence or are looking to hire, ", "contact me here.", "About Me"],
        fa:["سلام", " امیرحسین زارع هستم ", " یه فرانت اند ", "وب دولوپر", "اگه کسب و کاری هستی که دنبال استخدام یا همکاری هستی <br/>", "میتونی با من در ارتباط باشی", "درباره من"]
      }
    },
    {
      element:document.getElementsByClassName('aboutme--description')[0],
      template:`{}<span class="description-tex-color--picker has-text-content">{}</span>{}<span class="headet-text-color--picker description-text--bolder has-text-content">{}</span>{}<span class="headet-text-color--picker description-text--bolder has-text-content">{}</span>{}<span class="description-tex-color--picker has-text-content">{}</span>{}<span class="headet-text-color--picker description-text--bolder has-text-content">{}</span>{}<span class="description-tex-color--picker has-text-content">{}</span>{}<span class="headet-text-color--picker description-text--bolder has-text-content">{}</span>`,
      text:{
        en:["I worked with Front-End technologies a lot such as", " React, Javascript, Jquery, Css", " and related libraries like ", "Redux, Bootstrap, Material-UI ", "and I have good understanding of how to ", "Responsive Design"," and the technologies are used like ", "Css-grid, flexbox ", "and using other grid system designs such as ", " Bootstrap's grid system or material-UI's ", " and also have good understanding to how work with ", "restful api","  and using building tools like ", "Babel, Webpack"],
        fa:["تجربه ی خوبی توی کار با تکنولوژی های فرانت دارم مثل", "ری اکت جاوااسکریپت جی&zwnj;کوئری و سی&zwnj;اس&zwnj;اس ",
        "و کتابخونه های مرتبط مثل ", "ریداکس بوتسترپ متریال&zwnj;یو&zwnj;آی ",
        "و درک خوبی از چگونگی پیاده کردن "," طراحی ریسپانسیو ",
        "و تکنولوژی هایی که برای اینکار استفاده میشن مثل ", "سی&zwnj;اس&zwnj;اس", "فلکس باکس", "و استفاده کردن از گرید سیستم ها مثل ", "گرید سیستم بوتسرتپ یا متریال", " و همچنین توانایی کار کردن با ", "رست ای پی آي ", "رو دارم و تجربه کار با ابزارهایی مثل وبپک و ببل رو دارم."]
      }
    }
  ],
  straightBase:{
    child:{  
        elements:[...document.getElementsByClassName('nav-item'),...document.getElementsByClassName('mobile-nav--item'), ...document.getElementsByClassName('footer-item')],
        en:['AboutMe','Skills','Resume','Contact','AboutMe','Skills','Resume','Contact','Linkedin','GitHub','Email','Mobile',],
        fa:['درباره&zwnj;من', 'مهارت&zwnj;ها','رزومه', 'ارتباط','درباره&zwnj;من', 'مهارت&zwnj;ها','رزومه', 'ارتباط','لینکدین','گیتهاب','ایمیل','موبایل']
      },
    self:{
      elements:[...document.getElementsByClassName('change-custom--selection')],
      en:['AboutMe', 'skills', 'resume', 'Get in touch', 'email', 'name', 'title', 'message', 'send','color theme', 'language', 'an email has been sent to you. If you don\'t see that check your spam and All Mail boxes.'],
      fa:['درباره من','مهارت ها', 'رزومه', 'ارتباط','ایمیل','اسم','عنوان', 'پیام', 'ارسال', 'رنگ&zwnj;تم','زبان', 
      'یک ایمیل برای شما ارسال شد اگر آن را مشاهده نمیکنید صندوق spam یا all&zwnj;in&zwnj;box&zwnj; خود را چک کنید.']
    }
  }
}

const replaceString = (string, words) => {
  for(const word of words){
    string = string.replace('{}' ,word)
  }
  return string
}

const setTextDirection = lang => {
  if(lang == 'fa'){
    textIncludedElements.forEach(item =>{
      item.classList.remove('ltr-text-content')
      item.classList.add('rtl-text-content')
    })
    document.getElementsByClassName('aboutme--description')[0].style.setProperty('text-align', 'right')
    document.getElementsByClassName('contact-form__label')[2].style.setProperty('text-align', 'right')
    document.getElementsByClassName('customize-color')[0].classList.add('flex-direction-row')
    document.getElementsByClassName('customize-language')[0].classList.add('flex-direction-row')
    dynamicStrings.tmplateBase.forEach(item => {
      item.element.innerHTML = replaceString(item.template, item.text.fa)
    })
    let childrenTextElement = dynamicStrings.straightBase.child
    childrenTextElement.elements.forEach( (item, index) => {
      childrenTextElement.elements[index].children[0].innerHTML = childrenTextElement.fa[index]
    })
    let selfTextElement = dynamicStrings.straightBase.self
    selfTextElement.elements.forEach( (item, index) => {
      selfTextElement.elements[index].innerHTML = selfTextElement.fa[index]
    })
  }
  else{
    textIncludedElements.forEach(item =>{
      item.classList.remove('rtl-text-content')
      item.classList.add('ltr-text-content')
    })
    document.getElementsByClassName('aboutme--description')[0].style.setProperty('text-align', 'left')
    document.getElementsByClassName('contact-form__label')[2].style.setProperty('text-align', 'left')
    document.getElementsByClassName('customize-color')[0].classList.remove('flex-direction-row')
    document.getElementsByClassName('customize-language')[0].classList.remove('flex-direction-row')
    dynamicStrings.tmplateBase.forEach(item => {
      item.element.innerHTML = replaceString(item.template, item.text.en)
    })
    let childrenTextElement = dynamicStrings.straightBase.child
    childrenTextElement.elements.forEach( (item, index) => {
      childrenTextElement.elements[index].children[0].innerHTML = childrenTextElement.en[index]
    })
    let selfTextElement = dynamicStrings.straightBase.self
    selfTextElement.elements.forEach( (item, index) => {
      selfTextElement.elements[index].innerHTML = selfTextElement.en[index]
    })
  }
}

const addLanguageItemIcons = handler => {
  languageItemIcons.forEach(item => item.addEventListener('click', handler))
}

const languageItemIconsHandler = event => {
  languageItemIcons.forEach(item => item.classList.remove('selected-custom--item'))
  event.target.classList.add('selected-custom--item')
  chosenLanguage = event.target.getAttribute('data-lang')
  setTextDirection(chosenLanguage)
}

const setSchemeColorProperties = (customPropertyKey=4) => {
  const rootElement = document.documentElement
  for(let key of Object.keys(colorCustomProperties) ){
    rootElement.style.setProperty(key,colorCustomProperties[key][customPropertyKey])
  }
}

const addColorThemeItemListener = handler => {
  colorThemeItems.forEach(item => item.addEventListener('click', handler))
}

const colorThemeItemClickHandler = event => {
  setSchemeColorProperties(+event.target.getAttribute('data-id'))
  colorThemeItems.forEach(item => item.classList.remove('selected-custom--item'))
  event.target.classList.add('selected-custom--item')
}

const addPricingAnimation = () => {
  if(!pricingItems[0].classList.contains('animate__animated')){
    pricingItems.forEach(item => item.classList.add('animate__animated'))
    pricingItems.forEach(item => item.classList.add('animate__backInUp'))
    pricingItems.forEach(item => item.classList.remove('d-none'))
  }
}

const removeTouchedEventAddedClass = currentMobileNavbarItem => {
  let mobileNavbarItems = [...maobileNavItemDiv]
  mobileNavbarItems.forEach(item => item.children[0].classList.remove('nav-color__gold'))
}

const toggleIntroductionHeaderAnimate = () => {
  introductionHeader.classList.toggle("animate__animated")
  introductionHeader.classList.toggle("animate__rubberBand")
}

const setItemsDefault = () => {
  for(let i=0;i<navItems;i++){
    navItem = navItems[i]
    navItems[i].style.color = "#fff"
  }
}

setSchemeColorProperties(4)

addColorThemeItemListener(colorThemeItemClickHandler)

addLanguageItemIcons(languageItemIconsHandler)

introductionButton.addEventListener('click', event=>{
  location.href = "#contact"
})

if(window.innerWidth>=320 && window.innerWidth<475){
  aboutmePicturePattern.style.top="32%"
  aboutmePicturePattern.style.right="10%"  
}
else if(window.innerWidth>=475 && window.innerWidth<=575){
  aboutmePicturePattern.style.top="38%"
  aboutmePicturePattern.style.right="10%"
}

statusContact.addEventListener("mouseover",(event)=>{
  statusBtnCircle.style.display = "none"
  statusBtnReadyText.style.display = "block"
})

statusContact.addEventListener("mouseout",(event)=>{
  statusBtnCircle.style.display = "block"
  statusBtnReadyText.style.display = "none"
})
 
navItems.forEach(item=>item.addEventListener('click',event=>{
  navItems.forEach(element=>{
    element.children[0].classList.remove('nav-color__gold')
  })
}))

maobileNavItemDiv.forEach(item => item.addEventListener('click',event=>{
  maobileNavItemDiv.forEach(element=>{
    element.children[0].classList.remove('nav-color__gold')
  })
  mobileNavItemsDiv.classList.add("d-none")
  mobileNavItemsDiv.classList.remove("d-flex")
}))

window.addEventListener("scroll",()=>{
  if(window.scrollY<400){
    for(let i=0;i<navItems.length;i++){
      navItems[i].children[0].classList.remove("nav-color__gold")
      maobileNavItemDiv[i].children[0].classList.remove("nav-color__gold")
    }
  }
  else if(window.scrollY>=400 && window.scrollY<=650){
    navItems[1].children[0].classList.remove("nav-color__gold")
    navItems[0].children[0].classList.add("nav-color__gold")
    maobileNavItemDiv[1].children[0].classList.remove("nav-color__gold")
    maobileNavItemDiv[0].children[0].classList.add("nav-color__gold")
  }
  else if(window.scrollY>650 && window.scrollY<=1800){
    navItems[0].children[0].classList.remove("nav-color__gold")
    navItems[2].children[0].classList.remove("nav-color__gold")
    navItems[1].children[0].classList.add("nav-color__gold")
    maobileNavItemDiv[0].children[0].classList.remove("nav-color__gold")
    maobileNavItemDiv[2].children[0].classList.remove("nav-color__gold")
    maobileNavItemDiv[1].children[0].classList.add("nav-color__gold")
  }
  else if(window.scrollY>1800 && window.scrollY<=3000){
    navItems[1].children[0].classList.remove("nav-color__gold")
    navItems[3].children[0].classList.remove("nav-color__gold")
    navItems[2].children[0].classList.add("nav-color__gold")
    maobileNavItemDiv[1].children[0].classList.remove("nav-color__gold")
    maobileNavItemDiv[3].children[0].classList.remove("nav-color__gold")
    maobileNavItemDiv[2].children[0].classList.add("nav-color__gold")
    if(window.scrollY>=2200 && window.scrollY<=2630)
      addPricingAnimation()
  }
  else if(window.scrollY>3000 && window.scrollY<=5000){
    navItems[3].children[0].classList.add("nav-color__gold")
    navItems[2].children[0].classList.remove("nav-color__gold")
    maobileNavItemDiv[3].children[0].classList.add("nav-color__gold")
    maobileNavItemDiv[2].children[0].classList.remove("nav-color__gold")
  }

  let headerItem = document.getElementsByClassName("header")[0]
  if(window.scrollY!=0){
    headerDIv.style.borderBottom = "2px solid inherit"
    headerItem.style.height= "70px"
    mobileNavItemsDiv.style.top = "68px"
  }
  else{
    headerItem.style.height= "90px"
    headerDIv.style.borderBottom = ""
    mobileNavItemsDiv.style.top = "90px"
  }
})

aboutmePicturePerson.addEventListener("mouseover",(event)=>{
  if(window.innerWidth>=320 && window.innerWidth<475){
    aboutmePicturePattern.style.top="30%"
    aboutmePicturePattern.style.right="8%"  
  }
  else if(window.innerWidth>=475 && window.innerWidth<=575){
    aboutmePicturePattern.style.top="36%"
    aboutmePicturePattern.style.right="8%"
  }
  else if(window.innerWidth>=575){
    aboutmePicturePattern.style.top="12%"
    aboutmePicturePattern.style.right="10%"
  }
})

aboutmePicturePerson.addEventListener("mouseout",(event)=>{
  if(window.innerWidth>=320 && window.innerWidth<475){
    aboutmePicturePattern.style.top="32%"
    aboutmePicturePattern.style.right="10%"  
  }
  else if(window.innerWidth>=475 && window.innerWidth<=575){
    aboutmePicturePattern.style.top="38%"
    aboutmePicturePattern.style.right="10%"
  }
})

aboutmePicturePerson.addEventListener("mouseout",(event)=>{
  aboutmePicturePattern.style.top=""
  aboutmePicturePattern.style.right=""
})

mobilNavButton.addEventListener("click",(event)=>{
  if(mobileNavItemsDiv.classList.contains("d-none")){
    mobileNavItemsDiv.classList.add("d-flex")
    mobileNavItemsDiv.classList.remove("d-none")
  }
  else if(mobileNavItemsDiv.classList.contains("d-flex")){
    mobileNavItemsDiv.classList.add("d-none")
    mobileNavItemsDiv.classList.remove("d-flex")
  }
})

setInterval(()=>{
  toggleIntroductionHeaderAnimate()
},2500)

mobileNavItemsDiv.classList.add("d-none")


const form = document.forms[0];

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const formData = new FormData(this);
  const data = Object.fromEntries(formData.entries())
  const body = JSON.stringify(data)
  fetch("https://some.endpoint.dev", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(/**/)
    .catch(/**/);
});