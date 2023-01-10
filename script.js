
const panels = document.querySelectorAll(".panel");

panels.forEach(panel => {
    panel.addEventListener("click", () => {

        removeActive();
        panel.classList.add("active");
        body.style.backgroundColor = "gray"
    });
})

function removeActive(){
    panels.forEach(panel => {
        panel.classList.remove("active");
    })
}