let mediaMaxWidth750px = window.matchMedia("(max-width: 750px)");
let bars = document.querySelector(".fa-bars");
let mobileNavOpen = false;

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
    let mobileNavBtns = document.querySelectorAll(".mobile-nav-btn");

    mobileMenu.classList.toggle("mobile-menu-display");

    for (let i = 0; i < mobileNavBtns.length; i++) {
        mobileNavBtns[i].classList.toggle("mobile-nav-btn-display");
    }

    mobileNavOpen = !mobileNavOpen;

    function isNonMenuItemClicked(elem) {
        let isMenuItem = true; 
           
        for (let i = 0; i < mobileNavBtns.length; i++) {
            if (mobileNavBtns[i] == elem) {
                return false;
            }
        }
        
        if (elem == mobileMenu) {
            return false;
        }

        if (elem == bars) {
            return false;
        }

        return true;
    }


    function collapseMenuIfNonMenuItemClicked(event) {
        let target = event.target;

        if (isNonMenuItemClicked(target) && target != undefined) {
             toggleMenu()
             window.removeEventListener("click", collapseMenuIfNonMenuItemClicked);
        }
    }

    if (mobileNavOpen) {
        window.addEventListener("click", collapseMenuIfNonMenuItemClicked);
    }

}


makeMobileNav();
mediaMaxWidth750px.addEventListener("change", makeMobileNav);
bars.addEventListener("click", toggleMenu)

