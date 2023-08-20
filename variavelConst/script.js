//  const = uma variavel que nao pode ser alterada
// usar letras maiúsculas para nomear variáveis constantes.
const PI = 3.14159 
let radius; 
let circumference; 

radius = window.prompt('Enter the radius of a circle'); 
radius = Number(radius); 

// um erro acontece se tentamos mudar o valor da variavel const 
// PI = 420.69; 

circumference = 2 * PI * radius; 

console.log('The circumference is:',  circumference); 