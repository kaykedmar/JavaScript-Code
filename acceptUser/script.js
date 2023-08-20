/*
// Maneira Simples de aceitar usuario 

let username = window.prompt('Whats your name?');
console.log(username)
*/


// Maneira um pouco mais complicada 
let username = ''; 

document.getElementById('myButton').onclick = function() { 
let username = document.getElementById('myText').value; 
document.getElementById('myLabel').innerHTML = "Hello " + username;
console.log(username)
}
