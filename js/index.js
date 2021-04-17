
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
    console.log(pokemones);
    
    });


