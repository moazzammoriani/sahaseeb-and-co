let mediaMaxWidth750px = window.matchMedia("(max-width: 750px)");
let bars = document.querySelector(".fa-bars");

function makeHeroContainer() {
    let screenWidthLessThan750px = mediaMaxWidth750px.matches;
    let hero = document.querySelector(".hero-container")

    if (screenWidthLessThan750px) {
        hero.classList.add("container");
    } else {
        hero.classList.remove("container");
    }
}

function makeMobileNav() {
    let screenWidthLessThan750px = mediaMaxWidth750px.matches;
    let a = document.querySelectorAll(".nav-btn");
    let bars = document.querySelector(".fa-bars");
    let nav = document.querySelector("nav");
    let navCont = document.querySelector(".nav-container");
    let navEvener = document.querySelector(".nav-evener")

    if (screenWidthLessThan750px) { /* When the screen size gets around mobile levels */
        for (let i = 0; i < a.length; i++) { 
            a[i].classList.add("remove-a"); /* Get rid of the desktop nav buttons */
        }

        bars.style.display = "inline"; /* Make the bars icon visible */
        nav.classList.add("mobile-nav");
        navCont.classList.add("mobile-nav-container");
        navEvener.style.display = "none"; /* Make the div that was used to center the desktop nav menu disappear */
        

    } else {
        for (let i = 0; i < a.length; i++) {
            a[i].classList.remove("remove-a"); /*a*/ 
        }

        bars.style.display = "none"; /* Make the bars icon disapper */
        nav.classList.remove("mobile-nav"); 
        navCont.classList.remove("mobile-nav-container");
        navEvener.style.display = "block"
    }
}

function toggleMenu() {
    let mobileMenu = document.querySelector(".mobile-menu");
    mobileMenu.classList.toggle("mobile-menu-display");

}

console.log(bars);
mediaMaxWidth750px.addListener(makeHeroContainer);
mediaMaxWidth750px.addListener(makeMobileNav);
bars.addEventListener("click", toggleMenu)

