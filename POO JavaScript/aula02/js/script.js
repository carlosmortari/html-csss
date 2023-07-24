import modificador from './modificado.js';
import ingredientes from './ingrediente02.js';

let ingredientesOrdenados = modificador.ordenar(ingredientes, 'nome');
let ingredientesCapitalizados = modificador.CapitalizarNovo(ingredientes, 'nome');
let containerIngredientes = document.getElementById('container-ingredientes');

// console.log(ingredientesCapitalizados)

for(let ingrediente of ingredientesCapitalizados){
    let textoHTML = `
    <div class="ingrediente">
        <img src="js/img/img/${ingrediente.img}"/>
        <p class="nome-ingrediente">${ingrediente.nome}</p>
    </div>
    `;

    

    containerIngredientes.innerHTML += textoHTML;
}


