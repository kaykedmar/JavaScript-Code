let a; 
let b; 
let c; 

document.getElementById('myButton').onclick = function() { 
  a = document.getElementById('aTextbox').value; 
  a = Number(a); 

  b = document.getElementById('bTextbox').value; 
  b = Number(b)

  c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2)); 

  document.getElementById('cLabel').innerHTML = "Side C: " + c
}