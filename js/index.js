
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
    tdTipo.innerText = p.tipo;    
    tdDescripcion.innerHTML = p.descripcion;
    tdNro.innerText = i + 1;
    //tdAcciones.innerText = 
    //TO DO: Como agrego un boton para las acciones
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

    //console.log("Hola, mundo!", nombre, descripcion, legendario, tipo);

    let pokemon = {};
        pokemon.nombre = nombre;
        pokemon.descripcion = descripcion;
        pokemon.legendario = legendario;
        pokemon.tipo = tipo;

    pokemones.push(pokemon);
    cargarTabla();
    
    Swal.fire("Pokémon Registrado");
    });


