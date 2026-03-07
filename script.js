const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("nav-menu");

toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});


// BEFORE AFTER SLIDER

const slider = document.querySelector(".slider");
const before = document.querySelector(".before-wrapper");

if(slider){
slider.addEventListener("input", function(){
before.style.width = this.value + "%";
});
}
AOS.init({
duration:1000
});
