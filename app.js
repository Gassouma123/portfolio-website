let section= document.querySelector(".Skills");
let ks= document.querySelectorAll(".per div");
let section2= document.querySelector("body");
let po=document.querySelectorAll("body");
window.onscroll= function(){
    if (window.scrollY >= section.offsetTop-250){
        ks.forEach((div) => {
            div.style.width= div.dataset.width;
        })
    }
}