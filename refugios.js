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