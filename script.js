let mediaMaxWidth750px = window.matchMedia("(max-width: 750px)");
let bars = document.querySelector(".fa-bars");

function makeMobileNav() {
    let screenWidthLessThan750px = mediaMaxWidth750px.matches;
    let b = document.querySelector(".fa-bars");
    let nav = document.querySelector("nav");
    let navCont = document.querySelector(".nav-container");
    let navEvener = document.querySelector(".nav-evener")


    if (screenWidthLessThan750px) { /* When the screen size gets around mobile levels */


        b.style.display =  "inline"; /* Make the bars icon visible */
        nav.classList.add("mobile-nav");
        navCont.classList.add("mobile-nav-container");
        navEvener.style.display = "none"; /* Make the div that was used to center the desktop nav menu disappear */
        

    } else {
        bars.style.setProperty("display", "none"); /* Make the bars icon disapper */
        nav.classList.remove("mobile-nav"); 
        navCont.classList.remove("mobile-nav-container");
        navEvener.style.display = "block"
    }
}

function toggleMenu() {
    let mobileMenu = document.querySelector(".mobile-menu");
    mobileMenu.classList.toggle("mobile-menu-display");

}


makeMobileNav();
mediaMaxWidth750px.addEventListener("change", makeMobileNav);
bars.addEventListener("click", toggleMenu)

