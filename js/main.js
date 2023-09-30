const body = document.querySelector("body");
const burger = {
    btn: document.querySelector(".burgerBtn"),
    menu: document.querySelector(".header__navbarleft-middle"),
    navbarleftline: document.querySelector(".header__navbarleft"),
}

burger.btn.addEventListener("click", function(){
    burger.navbarleftline.classList.toggle("show");
    burger.btn.classList.toggle("show");
    body.classList.toggle("scroll");

    console.log('df')
});