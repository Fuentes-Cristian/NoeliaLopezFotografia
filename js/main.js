const formulario = document.getElementById("form"),
submit = document.getElementById("submit");

function cliente(nombre, apellido, email, consulta) {
    this.nombre = nombre;
    this.apellido =apellido;
    this.email = email;
    this.consulta = consulta;
    
    submit.addEventListener("click", (e)=>{

        e.preventDefault()
        let datos = nombre = document.getElementById("nombre").value;
        let datos2 = apellido = document.getElementById("apellido").value;
        let emails = email = document.getElementById("email").value;
        let consultas = consulta = document.getElementById("consulta").value;

        nuevoCliente = new cliente (datos, datos2, emails, consultas);
        clienteNuevo();
        
    })
}

cliente();

baseDatos = [];

function clienteNuevo() {
    baseDatos.push(nuevoCliente)

    baseDatosCadena = JSON.stringify(baseDatos);
    localStorage.setItem("Datos de los clientes", baseDatosCadena);
}
/*
function api() {
   fetch('../js/datosClientes.json')
  .then(response => response.json())
  .then(datosClientes =>{
    datosClientes.forEach(e => {
     const tabla = document.getElementById("table");
     tabla.innerHTML = `<table class="table">
     <thead>
       <tr>
         <th scope="col">${e.servicios}</th>
         <th scope="col">${e.servicios[0].apellido}</th>
         <th scope="col">${e.servicios}</th>
         <th scope="col">${e.servicios}</th>
       </tr>
     </thead>
     <tbody>
       <tr>
         <th scope="row">1</th>
         <td value"${e.servicios}"></td>
         <td value"${e.servicios}"></td>
         <td value"${e.servicios}"></td>
       </tr>
       <tr>
         <th scope="row">2</th>
         <td value"${e.servicios}"></td>
         <td value"${e.servicios}"></td>
         <td value"${e.servicios}"></td>

       </tr>
       <tr>
         <th scope="row">3</th>
         <td value"${e.servicios}"></td>
         <td value"${e.servicios}"></td>
         <td value"${e.servicios}"></td>

       </tr>
     </tbody>
   </table>`
   tabla.appendChild(tabla)
     
    });
    
  })
}

api();*/