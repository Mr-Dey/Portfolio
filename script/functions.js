let project=document.querySelector("#navbar_project");
let secondSection=document.querySelector('#secondSection');

scroll=(element,offset)=>{
    window.scrollTo({
        top:element.offsetTop-offset,
        behavior:"smooth"
    })
}

project.addEventListener('click',()=>{
    scroll(secondSection,100);
})