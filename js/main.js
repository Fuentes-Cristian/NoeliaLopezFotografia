const formulario = document.getElementById("form"),
submit = document.getElementById("submit")
resetForm = document.getElementById("reset");

function cliente(nombre, apellido, email, consulta) {
    this.nombre = nombre;
    this.apellido =apellido;
    this.email = email;
    this.consulta = this.consulta
    
    submit.addEventListener("click", (e)=>{

        e.preventDefault()
        let datos = nombre = document.getElementById("nombre").value;
        let datos2 = apellido = document.getElementById("apellido").value;
        let emails = email = document.getElementById("email").value;
        let consultas = consulta = document.getElementById("consulta").value;

        nuevoCliente = new cliente (datos, datos2, emails, consultas);
        clienteNuevo()
        resetForm.reset()
    })
}

cliente()

baseDatos = [];

function clienteNuevo() {
    baseDatos.push(nuevoCliente)

    baseDatosCadena = JSON.stringify(baseDatos);
    localStorage.setItem("Datos de los clientes", baseDatosCadena);
}

function fetch2() {
   fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
}

fetch2();
