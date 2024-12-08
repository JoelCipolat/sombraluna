//FORMULARIO
const form = document.getElementById("form");

//EVENTOS TECLADO
let teclado = document.getElementById("teclado");
let misTeclas = document.getElementById("misTeclas");

misTeclas.addEventListener("keydown", (e) => {
    if (e.key === "a") {
        teclado.className = "rojo";
    } else if (e.key === "s") {
        teclado.className = "blanco";
    } else if (e.key === "d") {
        teclado.className = "agua";
    } else {
        teclado.className = "celeste";
    }
});

//EVENTOS MOUSE
const boton = document.getElementById("miBoton");
const contenedor = document.getElementById("contenedor");

const misClics = document.getElementById("misClics");

//Sweet Alert --->
boton.addEventListener("click", function () {
    swal.fire("Huellitas | Patitas | AmorPerruno");
});
//Sweet Alert --->

boton.className = "miClase";
contenedor.style.textAlign = "center";

misClics.addEventListener('mousedown', () => {
    misClics.className = "rojo";
});

misClics.addEventListener('mouseover', () => {
    misClics.className = "blanco";
});

misClics.addEventListener('mouseout', () => {
    misClics.className = "agua";
});

misClics.addEventListener('click', () => {
    misClics.className = "celeste";
});

//ASINCRONÍA Y PROMESAS
boton.addEventListener("click", () => {
    contenedor.classList.add("celeste");
    setTimeout(() => {
        contenedor.classList.remove("celeste");
    }, 1500);
});

//DOM
const saludo = document.getElementById("saludo"); //el document es el puente entre nuestro JavaScript y nuestro HTML
saludo.innerHTML = `<h1> ¡Hola! 😊😊 </h1>`;
saludo.className = "saludo";

//DOM
const persona = document.getElementById("persona");
persona.innerHTML = `<p> Bienvenida💞 | Personita💕 | Somos nuevos✨ </p>`;
persona.className = "persona";

//DOM
const perrito = document.getElementById("perrito");
perrito.innerHTML = `<p> ¿ Quieres adoptar a un Perrito ? </p>`;
perrito.className = "perrito";

//DOM
const gatito = document.getElementById("gatito");
gatito.innerHTML = `<p> ¿ Quieres adoptar a un Gatito ? </p>`;
gatito.className = "gatito";

//DOM
const asesores = document.getElementById("asesores");
asesores.innerHTML = `<h2> Nuestros asesores: </h2>`;
asesores.className = "asesores";

//CLASES
class Cliente {
    constructor(gatito, perrito) {
        this.gatito = gatito;
        this.perrito = perrito;
        this.adoptado = false;
    }
    adoptar() { //(Línea 113) 
        this.adoptado = true;
    }
}

//OPERADORES AVANZADOS
//LET NOTA 1
const cachorro = new Cliente("gatito", "perrito");
let nota1 = document.getElementById("nota1");
nota1.innerHTML = `<h2> | 1) ${cachorro.gatito} | 2) ${cachorro.perrito} | (${cachorro.adoptado ? "No disponible" : "Disponible"}) </h2>`;
nota1.className = "nota1";

//ARREGLOS Y OBJETOS
const arrayObjetos = [
    { id: 1, adoptar: "grande" },
    { id: 2, adoptar: "chiquito" },
    { id: 3, adoptar: "mediano" },
    { id: 4, adoptar: "indiferente" },
];

//LOCALSTORAGE JSON.stringify
localStorage.setItem("arrayObjetos", JSON.stringify(arrayObjetos));

const preferencias = document.getElementById("preferencias");
preferencias.className = "preferencias";

arrayObjetos.forEach(objeto => {
    const div = document.createElement("div");
    div.innerHTML = `<p> ${objeto.id} ${objeto.adoptar} </p>`;
    preferencias.appendChild(div);
});

//LET NOTA 2
let nota2 = document.getElementById("nota2");
nota2.innerHTML = `<h2> ¿ 'adoptar' a '${cachorro.gatito}' o '${cachorro.perrito}' ? </h2>`;
nota2.className = "nota2";

//
cachorro.adoptar();
//

//LET NOTA 3
let nota3 = document.getElementById("nota3");
nota3.innerHTML = `<h2> 🥰${cachorro.adoptado}🥰(adoptado) </h2>`;
nota3.className = "nota3";

//CONSOLE.LOG
//SELECT
const selectPerrito = document.getElementById("selectPerrito");
selectPerrito.addEventListener("change", (e) => {
    console.log(e.target.value);
});

//SELECT
const selectGatito = document.getElementById("selectGatito");
selectGatito.addEventListener("change", (e) => {
    console.log(e.target.value);
});

//SELECT
const selectAsesores = document.getElementById("selectAsesores");
selectAsesores.addEventListener("change", (e) => {
    console.log(e.target.value);
});

//AJAX && FETCH
let lista = document.getElementById("listado");

fetch("../data.json")
    .then((response) => response.json())
    .then((data) => {
        data.forEach((cachorro) => {
            const li = document.createElement("li");
            li.innerHTML = `
        <h2>${cachorro.id}</h2>
        <p>${cachorro.disponible}</p>
        <b>${cachorro.nombre}</b>
        <hr />
      `;
            lista.append(li);
        });
    });