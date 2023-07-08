//EVENTOS TECLADO
let teclado = document.getElementById("teclado");
let misTeclas = document.getElementById("misTeclas");

misTeclas.addEventListener("keydown", (e) => {
    if (e.key === "a"){
        teclado.className = "rojo";
    } else if(e.key === "s"){
        teclado.className = "blanco";
    } else if(e.key === "d"){
        teclado.className = "agua";
    } else{
        teclado.className = "celeste";
    }
});