// toogle menu

let bars = document.querySelector(".bars");
let menu = document.querySelector(".menu")

bars.onclick=function(){
    let open = menu.classList.toggle("active")
    bars.setAttribute("aria-expanded", open)
}
// the menu icon is not a <button>: make Enter/Space toggle it too
bars.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
        e.preventDefault()
        bars.onclick()
    }
})