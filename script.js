document.getElementById("gear").setAttribute("draggable",false)
const sect1 = document.getElementById("start")
const sect2 = document.getElementById("section2")
const sect3 = document.getElementById("section3")
const gear = document.getElementById("gear")
const hidden = document.querySelectorAll(".hidden")
const skillSet = document.getElementById("skillSet")
const icons = document.getElementById("icons")
const contacts = document.getElementById("contactInfo")
const section2b = document.getElementById("section2b")
const FbUrl = "https://www.facebook.com/mikeangelocc"
const GhUrl = "https://github.com/mchuachong"
const LiUrl = "https://www.linkedin.com/in/mike-angelo-chua-chong-981b5916b/"
const DlUrl = "https://drive.google.com/file/d/1_mUs9xReyqmr_0e9bzw_hcdvYAIDcU9m/view?usp=sharing"
const sliderEdu = document.querySelector(".scrollEdu")
const sliderProj = document.querySelector(".scrollProj")
const skills = document.querySelectorAll(".skills")
const skillsCont = document.querySelector("#skillsCont")
const otherSkills = document.querySelector(".others")
const skillsData = [
    {   "skill":"JavaScript",
        "icon":"fa-brands fa-js",
        "desc":""},
    {   "skill":"React",
        "icon":"fa-brands fa-react",
        "desc":"JS Framework"
    },
    {   "skill":"HTML",
        "icon":"fa-brands fa-html5",
        "desc":""
    },
    {   "skill":"CSS",
        "icon":"fa-brands fa-css",
        "desc":""
    },
    {
        "skill":"Java",
        "icon":"fa-brands fa-java",
        "desc":""
    },
    {   "skill":"D3.js",
        "icon":"fa-solid fa-chart-simple",
        "desc":"Data Visualization"
    },
    {   "skill":"Bootstrap",
        "icon":"fa-brands fa-bootstrap",
        "desc":"CSS Library"
    },
    {
        "skill":"Node.js",
        "icon":"fa-brands fa-node-js",
        "desc":""
    },
    {
        "skill":"PostGre",
        "icon":"fa-solid fa-database",
        "desc":""
    },
    {
        "skill":"MongoDB",
        "icon":"fa-solid fa-database",
        "desc":""
    }
    
]
//icons
const openFb = () => {
    window.open(FbUrl,"_blank").focus()
}

const openGh = () => {
    window.open(GhUrl,"_blank").focus()
}

const openLi = () => {
    window.open(LiUrl,"_blank").focus()
}

const openDl = () => {
    window.open(DlUrl,"_blank").focus()
}

//scroll observer
const observer = new IntersectionObserver(e=>{
    e.forEach(d=>{
        if(d.isIntersecting){
            d.target.classList.add("show")
            if(d.target.classList.contains("left")){
            d.target.classList.add("flyL")}
            if(d.target.classList.contains("right")){
                d.target.classList.add("flyR")}
                if(d.target.classList.contains("top")){
                    d.target.classList.add("flyT")}
        }else{d.target.classList.remove("show");
            d.target.classList.remove("flyL");
            d.target.classList.remove("flyR");
            d.target.classList.remove("flyT");
        }
        
    })
})


//expandable button
let clicked = false;
const skillOpen = () => {
    if(!clicked){
    skillSet.style.border="none";
    skillSet.style.borderRadius="0";
    skillSet.style.width="100%";
    skillSet.style.height="100%";
    skillSet.textContent="";
    section2b.style.display="flex";
    section2b.style.justifyContent="center";
    icons.style.display="none";
    contacts.style.display="none";
    skillSet.style.display="flex";
    skillSet.style.justifyContent="center";
    clicked = true;
    showSkills(skillsData);

    }
    else{
    skillSet.style.border="1px solid var(--accent)"
    skillSet.style.width="50%";
    skillSet.style.height="2rem";
    skillSet.style.borderRadius="1rem";
    skillSet.textContent="Skill Set";
    icons.style.display="grid";
    contacts.style.display="grid";
    section2b.style.display="grid";
    clicked = false;
    clearHTML();
    }
    console.log("clicked");
}

const showSkills = (e) => {
    e.forEach(e=>{
        skillSet.innerHTML+=`
        <div class="skill">
        <div class="skillName"><i class="${e.icon} skillIcon"></i> ${e.skill}</div>
        </div>`
    });
        skillSet.innerHTML +=`
        <div class="skill others">
        <div class="skillName"><a id="othersL">
        <i class="fa-solid fa-circle-info"></i>
        Non-Programming Skills</a>
        `
}

const clearHTML = () => {
    skills.innerHTML = "";
    //allSkills.classList.add("hidden")
}

//scroll to
let atHome = true;
const toSect2 = () => {sect2.scrollIntoView({behavior:"smooth"});
                        atHome = false;}
const toSect1 = () => {sect1.scrollIntoView({behavior:"smooth"});  
                        atHome = true;}
const toSect3 = () => {sect3.scrollIntoView({behavior:"smooth"});  
atHome = true;}

//slider edu
let sliderIsOn = false;
let sliderIsOn2 = false;
let startX = 0;
let startX2 = 0;
let scrollLeft = 0;
let scrollLeft2 = 0;

const sliderOn = (e) => {
    if(e.target.classList.contains("card")&&e.target.classList.contains("left")){
        sliderIsOn = true;
        startX = e.pageX - sliderEdu.offsetLeft;
        scrollLeft = sliderEdu.scrollLeft;}
    else if (e.target.classList.contains("card")&&e.target.classList.contains("right")){
        sliderIsOn2 = true;
        startX = e.pageX - sliderProj.offsetLeft;
        scrollLeft = sliderProj.scrollLeft;
}}

const sliderMove = (e) => {
    if(!sliderIsOn){return}
    else{
        e.preventDefault();
        const x = e.pageX -sliderEdu.offsetLeft;
        const scroll = x-startX;
        sliderEdu.scrollLeft = scrollLeft-scroll;
    }
}

const sliderMove2 = (e) => {
    if(!sliderIsOn2){return}
    else{
        e.preventDefault();
        const x = e.pageX -sliderProj.offsetLeft;
        const scroll = x-startX;
        sliderProj.scrollLeft = scrollLeft-scroll;
    }
}

const slliderOff = (e) => {
    sliderIsOn = false;
    sliderIsOn2 = false;
}

hidden.forEach(e=>observer.observe(e))
sect1.addEventListener("click",toSect2)
gear.addEventListener("click",toSect2)
sect3.addEventListener("click",toSect2)

sect2.addEventListener("click",
    e=>{
        if(e.target.classList.contains("card"))
        {}
        else{
        switch(e.target.id){
            case "skillSet":
                skillOpen();
                break;
            case "fb":
                openFb();
                break;
            case "li":
                openLi();
                break;
            case "gh":
                openGh();
                break;
            case "dl":
                openDl();
                break;
            case "section2b":
                toSect1();
                break;
            case "othersL":
                toSect3()
            default:
                console.log(e)
                break;
        }
    }}
)

sect2.addEventListener("mousedown",e=>sliderOn(e))
sliderEdu.addEventListener("mousemove",e=>sliderMove(e))
sliderEdu.addEventListener("mouseleave",e=>slliderOff(e))
sliderEdu.addEventListener("mouseup",e=>slliderOff(e))
sliderProj.addEventListener("mousemove",e=>sliderMove2(e))
sliderProj.addEventListener("mouseleave",e=>slliderOff(e))
sliderProj.addEventListener("mouseup",e=>slliderOff(e))
window.addEventListener("keypress",e=>{
    if(e.key==" "||e.key=="Enter"){
        if(atHome){
            toSect2()
        }else{
            toSect1()
        }
    }
})
otherSkills.addEventListener("click",toSect3)