console.log("Jest git")

let btn = document.querySelector(".bx-menu");
let container = document.querySelector(".container");
let menu_container = document.querySelector(".menu_container");
let menu_interface = document.querySelector(".menu_buttons_container");

btn.onclick = function() {
    container.classList.toggle("clicked")
    menu_container.classList.toggle("clicked")
    menu_interface.classList.toggle("clicked")
    console.log("Jest git")
}