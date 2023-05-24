const bebadoSolidario = (['c', 'c', 'v', 'c', 'c', 'v', 'c']);
console.log(bebadoSolidario);
let ultimaletra;
let nrdebebidas = 0;
for (let index = 0; index < bebadoSolidario.length; index++) {
    //console.log(ultimaletra);
    //console.log(bebadoSolidario[index]);
   if (bebadoSolidario[index] == 'v') {
        
        ultimaletra = bebadoSolidario[index];
       // console.log('É um V');
        index++
   }
   if (bebadoSolidario[index] == ultimaletra) {
        nrdebebidas = nrdebebidas;
        ultimaletra = "";
        //console.log("a letra é igual a ultima", bebadoSolidario[index]);
    } else if (bebadoSolidario[index] != ultimaletra ) {
        nrdebebidas = nrdebebidas + 1;
        ultimaletra = bebadoSolidario[index];
       // console.log(ultimaletra);
    }

}
console.log(nrdebebidas);

// falta validar o V e se for V passa a frente;

// http://dontpad.com/bebadosolidario