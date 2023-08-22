document.getElementById('showResult').onclick = function() { 
  let myTexto = document.getElementById('myText').value;
  let resultado = document.getElementById('js-result');
  let cores = myTexto; // Atribuir o valor de myTexto a cores
  let result = ''; // Definir a variável result

  switch (cores) { 
    case 'blue': 
      result = 'A cor é Azul'; 
      break;
    case 'red': 
      result = 'A cor é Vermelho';
      break;
    case 'green': 
      result = 'A cor é Verde';
      break;
    case 'pink': 
      result = 'A cor é Rosa'; 
      break;
    default:
      result = 'Nao tenho essa Cor ! ';
  }

  myTexto.value = result; // Atualizar o valor do input
  resultado.innerHTML = result; // Exibir o resultado
};
