let home=document.querySelector("#navbar_home");
let project=document.querySelector("#navbar_project");
let skills=document.querySelector("#navbar_skills");
let firstSection=document.querySelector("#firstSection");
let secondSection=document.querySelector('#secondSection');
let thirdSection=document.querySelector("#thirdSection");
let section=document.querySelectorAll(".section")

// functions for scroll
scroll=(element,offset)=>{
    window.scrollTo({
        top:element.offsetTop-offset,
        behavior:"smooth"
    })
}

//The main Function to show smooth blur transition
const observer=new IntersectionObserver((elemet)=>{
    elemet.forEach((e)=>{
        e.isIntersecting?e.target.classList.add('show'):e.target.classList.remove('show');
    })
})

home.addEventListener('click',()=>scroll(firstSection,100));
project.addEventListener('click',()=>scroll(secondSection,100));
skills.addEventListener('click',()=>scroll(thirdSection,100));


section.forEach((e)=>observer.observe(e));