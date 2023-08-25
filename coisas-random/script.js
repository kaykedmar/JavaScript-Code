document.getElementById('submit').onclick =  function(idade) {

  let entrada = Number(document.getElementById('meuTexto').value); 
  let resultado = document.getElementById('result').innerHTML = result
 

  if(entrada >= 18) { 
    result = 'Voce e adulto!!'¬
  } else if (entrada < 18) { 
    result = 'Voce nao e adulto!'
  } else { 
    result = 'insera uma idade valida'
  }
  resultado.innerHTML = result
  console.log(entrada)
 }



