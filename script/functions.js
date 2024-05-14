let project=document.querySelector("#navbar_project");
let secondSection=document.querySelector('#secondSection');
let section=document.querySelectorAll(".section")

// functions
scroll=(element,offset)=>{
    window.scrollTo({
        top:element.offsetTop-offset,
        behavior:"smooth"
    })
}

const observer=new IntersectionObserver((elemet)=>{
    elemet.forEach((e)=>{
        e.isIntersecting?e.target.classList.add('show'):e.target.classList.remove('show');
    })
})


project.addEventListener('click',()=>{
    scroll(secondSection,100);
})

section.forEach((e)=>observer.observe(e));