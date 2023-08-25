/*
document.getElementById('submit').onclick =  function(idade) {

  let entrada = Number(document.getElementById('meuTexto').value); 
  let resultado = document.getElementById('result').innerHTML = result
 

  if(entrada >= 18) { 
    result = 'Voce e adulto!!'
  } else if (entrada < 18) { 
    result = 'Voce nao e adulto!'
  } else { 
    result = 'insera uma idade valida'
  }
  resultado.innerHTML = result
  console.log(entrada)
 }
*/


function verificaIdade() { 
  const ENTRADA = Number(document.getElementById('meuTexto').value);
  result = '';

  if (isNaN(ENTRADA)) { 
    result = "Insira uma idade válida";
  } else if (ENTRADA >= 18) { 
    result = "Você é adulto!";
  } else if (ENTRADA < 18) { 
    result = "Você não é adulto!";
  }  
 

  document.getElementById('result').innerHTML = result;
} 

document.getElementById('submit').onclick = verificaIdade

