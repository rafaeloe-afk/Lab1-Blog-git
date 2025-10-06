// Cargar el contenido de un archivo HTML externo
function cargarContenido(ruta) {
  fetch(ruta)
    .then(res => res.text())
    .then(data => {
      document.getElementById('contenido').innerHTML = data;
      window.scrollTo(0, 0); // vuelve arriba al cargar
    })
    .catch(err => {
      document.getElementById('contenido').innerHTML = "<p>Error al cargar el contenido.</p>";
      console.error(err);
    });
}

// Cargar recetas desde recetas.json
function cargarRecetas() {
  fetch("recetas/recetas.json")
    .then(res => res.json())
    .then(recetas => {
      const lista = document.getElementById("lista-recetas");
      lista.innerHTML = "";

      recetas.forEach(r => {
        const li = document.createElement("li");
        li.innerHTML = `<a href="#" onclick="cargarContenido('${r.archivo}')">${r.nombre}</a>`;
        lista.appendChild(li);
      });
    })
    .catch(err => console.error("Error al cargar recetas:", err));
}

// Cargar recetas desde recetasdestacadas.json
function cargarRecetasDestacadas() {
  fetch("recetas/recetasdestacadas.json")
    .then(res => res.json())
    .then(recetas => {
      const lista = document.getElementById("recetas-destacadas");
      lista.innerHTML = "";

      recetas.forEach(r => {
        const li = document.createElement("li");
        li.innerHTML = `<a href="#" onclick="cargarContenido('${r.archivo}')">${r.nombre}</a>`;
        lista.appendChild(li);
      });
    })
    .catch(err => console.error("Error al cargar recetas:", err));
}


// Cargar al iniciar
window.onload = function() {
  cargarContenido("recetas/bienvenida.html");
  cargarRecetas();
  cargarRecetasDestacadas();
};