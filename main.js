const squares = document.querySelectorAll(".square")

squares.forEach(square => {
    square.addEventListener("mouseover", agregarPropiedad)
})
squares.forEach(square => {
    square.addEventListener("mouseout", sacarPropiedad)
})

function agregarPropiedad(e) {
    if (e.target.id === "rotate") {
        e.target.style.transform = "rotate(15deg)"
    } else if (e.target.id === "translate") {
        e.target.style.transform = "translate(-5px, -10px)"
    } else if (e.target.id === "skew") {
        e.target.style.transform = "skew(-5deg, -10deg)"
    } else if (e.target.id === "scale") {
        e.target.style.transform = "scale(0.7)"
    } else if (e.target.id === "matrix") {
        e.target.style.transform = "matrix(0, 1, 1, 1, 0, 0)"
    }
}
function sacarPropiedad(e) {
    e.target.style.transform = "none" 
}