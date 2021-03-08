/* Overlay menu */
const button = document.querySelector('.button');
const menu = document.querySelector('.menu');
var body = document.getElementsByTagName("BODY")[0];

//same page links
const homeLink1 = document.querySelector('.home-link-1');
const homeLink2 = document.querySelector('.home-link-2');
const homeLink3 = document.querySelector('.home-link-3');

button.addEventListener('click', () => {
    button.classList.toggle('-menu-open');
    menu.classList.toggle('-open');
    body.classList.toggle('-open');
});

//remove open class for same page links
var allClasses = [homeLink1,homeLink2,homeLink3];

allClasses.forEach(function(el) {
    el.addEventListener('click', () => {
        button.classList.remove('-menu-open');
        menu.classList.remove('-open');
        body.classList.remove('-open');
    })
});