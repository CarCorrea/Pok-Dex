
tinymce.init({
    selector: '#desc-txt',
    height: 200,
    menubar: false,
    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount'
    ],
    toolbar: 'undo redo | formatselect | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help',
    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
  });
  
const pokemones =[]; 
const eliminar = async function(){

  let res = await Swal.fire({
    title: "¿Desea enviar el pokémon al profesor?",
    showCancelButton: true,
    confirmButtonText: "Enviar!"
  });
  if(res.isConfirmed){
    //1.-Saber qué botón fué el que se apretó
  
    //2.-Sacar el número del boton
    let nro = this.nro;
    //3.-Eliminar el pokémon de la lista
    pokemones.splice(nro,1);
    //4.-Recargar la tabla
    cargarTabla();
  }else{
    Swal.fire("Operación cancelada");
  }
};

const cargarTabla = () =>{
  //1.- Referencia a la tabla
  let tbody = document.querySelector("#tbody-pokemon");  
  //Antes del for debo limpiar la tabla
  tbody.innerHTML = "";
  //2.- Por cada pokémon generar una fila
  for(let i = 0 ; i < pokemones.length ; i++) {
    let p = pokemones[i];
    // Crea un elemento que no existe (tr) pero no lo agrega a la página
    let tr = document.createElement("tr");
    //3.- Por cada atributo de pokemon, generar una zelda (td)
    let tdNombre = document.createElement("td");
    let tdTipo = document.createElement("td");
    let tdDescripcion = document.createElement("td");
    let tdNro = document.createElement("td");
    let tdAcciones = document.createElement("td");

    tdNombre.innerText = p.nombre;
    tdNombre.classList.add("text-center");
    
    let icono = document.createElement("i");
      if (p.tipo == "1"){
        //<i class="fas fa-tint"></i> 
        icono.classList.add("fas","fa-tint","text-primary", "fa-2x");
      } else if (p.tipo == "2"){
        // <i class="fas fa-fire"></i>
        icono.classList.add("fas","fa-fire","text-danger","fa-2x");
      } else if (p.tipo == "3"){
        // <i class="fab fa-envira"></i>
        icono.classList.add("fab","fa-envira","text-success","fa-2x");
      } else if (p.tipo == "4"){
        // <i class="fas fa-bolt"></i>  
        icono.classList.add("fas","fa-bolt","text-warning","fa-2x");  
      }
    tdTipo.classList.add("text-center");
    tdTipo.appendChild(icono);        

    tdDescripcion.innerHTML = p.descripcion;
    tdDescripcion.classList.add("text-center");
    tdNro.innerText = i + 1;
    //tdAcciones.innerText = 
    //TO DO: Como agrego un boton para las acciones

    let boton = document.createElement("button");
    boton.nro = i;
    boton.addEventListener("click", eliminar);
    //le agrego texto al boton
    boton.innerText = "Enviar al profesor"
    //hacer que el boton sea rojo
    boton.classList.add("btn","btn-danger");
    tdAcciones.appendChild(boton);
    tdAcciones.classList.add("text-center");

    tr.appendChild(tdNro);
    tr.appendChild(tdNombre);
    tr.appendChild(tdTipo);
    tr.appendChild(tdDescripcion);
    tr.appendChild(tdAcciones);
    tbody.appendChild(tr);
    
  };
  
  //4.- Agregar esa fila a la tabla

};

document.querySelector("#pokemon-form").addEventListener('submit', (e)=>{
    e.preventDefault(); // Prevenir que el formulario recargue la pag
    let nombre = document.querySelector("#nombre-txt").value;
    let descripcion = tinymce.get("desc-txt").getContent();
    let legendario = document.querySelector("#legendario-si").checked;
    let tipo = document.querySelector("#tipo-select").value;
    let esValido = true;
    document.querySelector("#nombre-txt").classList.remove("is-invalid");
    document.querySelector("#desc-txt").classList.remove("is-invalid");

    if(nombre.trim() == "") {
      document.querySelector("#nombre-txt").classList.add("is-invalid");
      esValido = false;
    }

    if(descripcion.trim() == "") {
      document.querySelector("#desc-txt").classList.add("is-invalid");
      esValido = false;
    }

    if(esValido){
      let pokemon = {};
      pokemon.nombre = nombre;
      pokemon.descripcion = descripcion;
      pokemon.legendario = legendario;
      pokemon.tipo = tipo;

      pokemones.push(pokemon);
      cargarTabla();
  
      Swal.fire("Registro exitoso","Pokémon Registrado","info");
      }
    });
    


  document.querySelector("#limpiar-btn").addEventListener("click", () =>{
    //limpiar elementos
    //limpiar un nombre
    document.querySelector("#nombre-txt").value = "";
    //limpiar un tinymce
    tinymce.get("desc-txt").setContent("");
    //limpia un radiobutton seleccionando la 1era opcion
    document.querySelector("#legendario-si").checked = true;
    //limpia un select
    document.querySelector("#tipo-select").value = "1";
  });
