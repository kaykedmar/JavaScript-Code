let contagem = 0; 

document.getElementById('aumentar').onclick = function() { 
  contagem+=1; 
  document.getElementById('visor').innerHTML = contagem;
}

document.getElementById('zerar').onclick = function() { 
  contagem=0; 
  document.getElementById('visor').innerHTML = contagem;
}

document.getElementById('diminuir').onclick = function() { 
  contagem-=1;
  document.getElementById('visor').innerHTML = contagem; 
}

