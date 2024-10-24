// Burger Button

const burger = document.querySelector('#burger')
const navMenu = document.querySelector('#nav-menu')
const toTop = document.querySelector('#to-top')

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
        toTop.classList.remove("hidden")
        toTop.classList.add("flex")
    } else {
        header.classList.remove("navbar-fixed")
        toTop.classList.remove("flex")
        toTop.classList.add("hidden")
    }
}

// Hide Burger Klik di luar Burger

window.addEventListener('click', function(e) {
    if(e.target != burger && e.target != navMenu) {
        burger.classList.remove('burger-active')
        navMenu.classList.add('hidden')
    }
})