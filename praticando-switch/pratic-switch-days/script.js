document.getElementById('js-Mybutton').onclick = function() { 

  let resultado = document.getElementById('js-resultado'); 
  let result = '';
  let valor = 'Segunda Feira';
 
  switch (valor) { 
    case 'Segunda Feira':
      result = 'Hoje é Segunda Feira';
      break;
    case 'Terça Feira': 
      result = 'Hoje é Terça Feira';
      break;
    case 'Quarta Feira': 
      result = 'Hoje é Quarta Feira';
      break;
    case 'Quinta Feira': 
      result = 'Hoje é Quinta Feira';
      break;
    case 'Sexta Feira': 
      result = 'Hoje é Sexta Feira';
      break;
    default:
      result = 'Não é nenhum dia da semana que você especificou';
  }

    // Feito para mostrar o resultado no HTML 
     resultado.innerHTML = result
}
