function fnCapitalizarNovo(colecao, atributo){
    if(typeof colecao[0] == 'object'){
         let resultado = colecao.map(function(obj){
            let letraInicial = 
                obj[atributo].charAt(0).toUpperCase();
        let restoTexto = 
                obj[atributo].slice(1); 

            obj[atributo] = letraInicial + restoTexto ;

            return obj;
                        
         });

         return resultado
    }else {
        fnCapitalizar(colecao);
    }
}

function fnCapitalizar (vetor) {
    var modificado = [];

    for(let i = 0; i < vetor.length; i++){
        let letraInicial = 
            vetor[i].nome.charAt(0).toUpperCase();
        let restoTexto = 
            vetor[i].nome.slice(1);
        let resultado =  letraInicial + restoTexto
        
        modificado[i] = resultado;
    }


    console.log(modificado);
}

function fnOrdenar (vetor){
    return vetor.sort(function(a,b){
       
    });
}

function fnCaixaAlta(vetor){
    var modificado = [];

    for(let i = 0; i < vetor.length; i++){
        modificado[i] = vetor[i].toUpperCase();
    }

    return modificado;
}


export default {
    capitalizar: fnCapitalizar,
    CapitalizarNovo: fnCapitalizarNovo,
    ordenar: fnOrdenar,
    caixaAlta: fnCaixaAlta
};
