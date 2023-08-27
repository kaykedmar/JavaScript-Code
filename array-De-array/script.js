// Criando listas de diferentes alimentos
let fruits = ['banana', 'mango', 'morango']; 
let vegetables = ['carrots', 'onions', 'potatoes']; 
let meats = ['eggs', 'chicken', 'fish']; 

// Juntando as listas em um grupo de grupos
let geral = [fruits, vegetables, meats]; 

// Mudando uma fruta na lista de frutas
geral[0][2] = 'apple'; 

// Mostrando como as listas estão agora
console.log(...geral);