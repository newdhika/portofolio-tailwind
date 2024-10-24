// Burger Button

const burger = document.querySelector('#burger')
const navMenu = document.querySelector('#nav-menu')

burger.addEventListener('click', function() {
    burger.classList.toggle('burger-active')
    navMenu.classList.toggle('hidden')
})

// Navbar Fixed

window.onscroll = function() {
    const header = document.querySelector("header")
    const fixedNav = header.offsetTop;

    if(window.scrollY > fixedNav) {
        header.classList.add("navbar-fixed")
    } else {
        header.classList.remove("navbar-fixed")
    }
}