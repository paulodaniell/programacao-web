const incrementar = document.querySelector('#incrementar');
const decrementar = document.querySelector('#decrementar');
const resultado = document.querySelector('#resultado');
let contador =0


incrementar.addEventListener("click",()=>{
    contador++;
    resultado.innerHTML=contador;

    
});
decrementar.addEventListener("click",()=>{;
    if(contador === 0){
        alert("O contador já esta em 0");
        return;
    }
    contador--;
    resultado.innerHTML = contador;

});



let inputUsuario = document.getElementById("inputUsuario");
let lista = document.querySelector('#lista')
inputUsuario.onkeydown = function(event){
    if(event.key == "Enter") {
        let texto = document.createElement('li');
        texto.innerHTML = inputUsuario.value;
       
        texto.style.listStyleType = "none";
        lista.appendChild(texto);
        inputUsuario.value= '';
        
    };
};


const entrada = document.querySelector('#contadorString');
const stringsAtual = document.querySelector('#stringAtual');
const limpar = document.querySelector('#limpar')

entrada.addEventListener("input",()=>{
    let textoLimpo = entrada.value.replace(/\s/g, '');
    let totalReal = textoLimpo.length;
 
    stringsAtual.innerHTML = totalReal;
})
limpar.addEventListener("click",()=>{
    entrada.value = '';
    stringsAtual.innerHTML = '0';
})




const tipoLista = document.querySelector('#tipoLista');
const addLista = document.querySelector('#addLista');
const containerListas = document.querySelector('#containerListas');

addLista.addEventListener("click", ()=>{
    let tipo = tipoLista.value;

    let novaLista = document.createElement(tipo); 

    
    for(let i = 1; i <= 3; i++){
        let item = document.createElement('li');
        item.innerHTML = "Item " + i;
        novaLista.appendChild(item);
    }

    containerListas.appendChild(novaLista);
});



const resetar = document.querySelector('#resetar');

resetar.addEventListener("click", ()=>{
    contador = 0;
    resultado.innerHTML = contador;

    lista.innerHTML = '';

    inputUsuario.value = '';

    entrada.value = '';
    stringsAtual.innerHTML = '0';

    containerListas.innerHTML = '';
});