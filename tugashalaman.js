let header = document.getElementById("header");
let title = document.querySelector (".title");
let menu = document.querySelectorAll(".menu ul li a")
function ubahWarnaHeader(){
if (window.scrollY > 0){
header.style.backgroundColor = "rgba(255, 215,0)";
header.style.borderBottom = "none";
header.style.backgroundColor = "rgba(255, 215,0)";
header.style.borderBottom = "1px solid rgb(237, 236,236)";
title.style.color = "white";
menu.forEach (function(item){
    item.style.color ="white";
})
}else{
header.style.backgroundColor = "transparent";
header.style.borderBottom = "1px solid rgb(237, 236,236)";
title.style.color = "black";
menu.forEach (function(item){
    item.style.color ="black";
})
}
}
window.addEventListener("scroll", ubahWarnaHeader)

let floatingbutton = document.getElementById("floating-button");
function showOrHideFloatingButton(){
    if(window.scrollY > 0){
      floatingbutton.style.display = "flex"
    }else{
        
     floatingbutton.style.display = "none"
   }   
}
window.addEventListener("scroll",showOrHideFloatingButton);
function scrollontop(){
    window.scrollTo({
        top: 0,behavior: "smooth"
    })
}
floatingbutton.onclick = scrollontop

let heroLink = document.querySelector
('.menu ul li a[href="#hero"]')
let aboutLink = document.querySelector
('.menu ul li a[href="#about"]')
let skillkuLink = document.querySelector
('.menu ul li a[href="#skillku"]')
let projectLink = document.querySelector
('.menu ul li a[href="#project"]')
let contactLink = document.querySelector
('.menu ul li a[href="#contact"]')

let aboutSection = document.getElementById("about");
let skillkuSection = document.getElementById("skillku");
let heroSection = document.getElementById("hero");
let projectSection = document.getElementById("project");
let contactSection = document.getElementById("contact");

function scrollToHero(event) {
    event.preventDefault();
    heroSection.scrollIntoView({
        behavior: "smooth"
    });
}
function scrollToAbout(event) {
    event.preventDefault();
    aboutSection.scrollIntoView({
        behavior: "smooth"
    });
}

function scrollToSkillku(event) {
    event.preventDefault();
    skillkuSection.scrollIntoView({
        behavior: "smooth"
    });
}

function scrollToProject(event) {
    event.preventDefault();
    projectSection.scrollIntoView({
        behavior: "smooth"
    });
}
function scrollToContact(event) {
    event.preventDefault();
    contactSection.scrollIntoView({
        behavior: "smooth"
    });
}
aboutLink.onclick = scrollToAbout
skillkuLink.onclick = scrollToSkillku
heroLink.onclick = scrollToHero
projectLink.onclick = scrollToProject
contactLink.onclick = scrollToContact


let menuBars = document.getElementById
("menu-bars");
let sidebarResponsive = document.getElementById
("sidebar-responsive");
let closeSidebarButton = document.getElementById
("close-sidebar");




let resolusiScreen = window.matchMedia("(max-width: 768px)")

function responsiveScreen(screen) {
    if (screen.matches) {
        menuBars.style.display = "block";
        menuBars.addEventListener("click", function (){
            sidebarResponsive.style.display = "block";
            menuBars.style.display = "none";
        });
        closeSidebarButton.addEventListener("click", function()
    {
        sidebarResponsive.style.display = "none";
        menuBars.style.display = "block";
    });
    }else{
        sidebarResponsive.style.display = "none";
        menuBars.style.display = "none";
    }
}

responsiveScreen(resolusiScreen);
resolusiScreen.addEventListener("change", responsiveScreen);