let frase = "Vou estudar a semana inteira para recuperar os estudos";

let fraseSeparada = frase.split(" ");
let objeto = {};

function contador(){

    for(let letra of fraseSeparada){
        const primeiraLetra = letra[0];
        if(objeto[primeiraLetra]){
            objeto[primeiraLetra]++;
        } else {
            objeto[primeiraLetra] = 1;
        }
    }

    console.log(objeto)
}

contador();
