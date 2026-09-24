var menu = document.getElementById("menu-btn");
var sidenav = document.getElementById("side-nav");

sidenav.style.right = "-250px";
menu.onclick=function(){
    if(sidenav.style.right == "-250px"){
        sidenav.style.right = "0"; 
    }else{
        sidenav.style.right = "-250px"
    }
    menu.setAttribute("aria-expanded", sidenav.style.right != "-250px");
}
// the menu icon is an <img>: let keyboard users open it with Enter/Space
menu.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        menu.onclick();
    }
});
