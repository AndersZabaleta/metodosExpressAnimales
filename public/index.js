let tipo = "perros";
fetch("/animales")
  .then(function (res) {
    return res.json();
  })
  .then(function (res) {
    console.log(res);
    let perros = "";
    let gatos = "";
    for (let i = 0; i < res.perros.length; i++) {
      perros += `
    <div>
        <h3>${res.perros[i].nombre}</h3>
        <p>Raza: ${res.perros[i].raza}</p>
        <p>Edad: ${res.perros[i].edad}</p>
    </div>
    `;
    }
    for (let i = 0; i < res.gatos.length; i++) {
      gatos += `
        <div>
        <h3>${res.gatos[i].nombre}</h3>
        <p>Raza: ${res.gatos[i].raza}</p>
        <p>Edad: ${res.gatos[i].edad}</p>
    </div>
        `;
    }
    document.getElementById("div1").innerHTML = perros + gatos;
  });

function manageChange(event) {
  console.log(event.target.value);
  tipo = event.target.value;
}

function anyadir() {
  let nombre = document.getElementById("nombre").value;
  let raza = document.getElementById("raza").value;
  let edad = parseInt(document.getElementById("edad").value);
  let animal = {
    nombre,
    raza,
    edad,
    tipo,
  };

  fetch("/animales", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(animal),
  })
    .then(function (res) {
      return res.json();
    })
    .then(function (res) {
      let perros = "";
      let gatos = "";
      for (let i = 0; i < res.perros.length; i++) {
        perros += `
        <div>
            <h3>${res.perros[i].nombre}</h3>
            <p>Raza: ${res.perros[i].raza}</p>
            <p>Edad: ${res.perros[i].edad}</p>
        </div>
        `;
      }
      for (let i = 0; i < res.gatos.length; i++) {
        gatos += `
            <div>
            <h3>${res.gatos[i].nombre}</h3>
            <p>Raza: ${res.gatos[i].raza}</p>
            <p>Edad: ${res.gatos[i].edad}</p>
        </div>
            `;
      }
      document.getElementById("div1").innerHTML = perros + gatos;
      document.getElementById("nombre").value = "";
      document.getElementById("raza").value = "";
      document.getElementById("edad").value = "";
    });
}
