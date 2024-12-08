let nombre = prompt("Ingrese su nombre");
while (nombre === "") {
    alert("Error");
    nombre = prompt("Ingrese su nombre");
}

Swal.fire({
    title: "Good job!",
    text: "You clicked the button!",
    icon: "success"
});

let apellido = prompt("Ingrese su apellido");
while (apellido === "") {
    alert("Error");
    apellido = prompt("Ingrese su apellido");
}

const usuario = alert(`HOLA 
    ${nombre} ${apellido} 
        👀`)

let edad = prompt("Ingrese su edad");
while (edad === "") {
    alert("Error");
    edad = prompt("Ingrese su edad");
}
alert("Eres del año . .");
alert("2024" - edad + " 😜");

const permiso = edad >= 18 ? true : false;
    permiso ? alert("Puedes adoptar al Cachorro 👍") : alert("No puedes adoptar al Cachorro 🙃");

let cat = prompt("Querés adoptar a un Gatito ?");
if (cat === "si") {
    const miausito = (cachorro, adulto) => {
        prompt("Cachorro o Adulto ?");
        return cachorro || adulto; //return; pasa la informacion de una funcion a otra por parametro y siempre termina o acaba la funcion
    }
    miausito();
    alert("Muy bien 😊");
}
else {
    alert("No importa 😢");
}

let dog = prompt("Querés adoptar a un Perrito ?");
if (dog === "si") {
    const cachorrito = (cachorro, adulto) => {
        prompt("Cachorro o Adulto ?");
        return cachorro || adulto; //return; pasa la informacion de una funcion a otra por parametro y siempre termina o acaba la funcion
    }
    cachorrito();
    alert("Muy bien 😊");
}
else {
    alert("No importa 😢");
}

let numero = parseInt(prompt(`Cuánto vas a querer a tu Mascota ? ?
    Decí un Número 😁`));
if (numero != "0") {
    alert("La vas a querer Muchoo 💖");
    for (let i = 1; i <= 3; i++) {
        let resultado = numero * "10" * i;
        alert(`Hay un ${resultado}% de que te Ame 💖`);
    }
}

let documento = parseInt(prompt("Su DNI:"));
switch (documento) {
    case documento:
        alert("Bienvenido ✨😃");
        break;
    default:
        alert("Error");
        break;
}

let hogar = prompt("Ya tenés Mascotas en tu hogar ? ?");
while (hogar != "") {
    alert("Gracias por elegirnos ✨😃");
    break;
}