let navItems = document.getElementsByClassName("nav-item");

function navBarHamToggle() {
    for (var i = 0; i < navItems.length-1; i++) {
        if (!navItems[i].className.includes("nav-item-small-scr")) {
            navItems[i].className += " nav-item-small-scr";
        } else {
            navItems[i].className = navItems[i].className.replace('nav-item-small-scr', '');
        }
    }
}
