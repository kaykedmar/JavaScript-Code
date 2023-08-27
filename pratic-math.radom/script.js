const answer = Math.floor(Math.random() * 10 + 1); 
let guesses = 0; 

document.getElementById('js-submit').onclick = function() { 

 let guess = document.getElementById('js-myText').value
 guesses++;

 if (guess == answer) { 
  alert(`${answer} é a resposta, e você precisou de ${guesses} tentativa(s) para acertar.`);
 }
 else if (guess > answer) { 
  alert('Muito longe da resposta')
 }
 else if (guess < answer) { 
  alert('Esta Proxima da resposta')
 } else { 
  alert('Insira um numero valido')
 }
}