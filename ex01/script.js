let firstName = 'Kayk'; //String
let age = 18; //Numbers
let student = true;  // Booleans

console.log("Hello", firstName);
console.log("You are", age, "years old");
console.log("Enrolled", student);


//Dom Manipulation 
document.getElementById('p1').innerHTML = "You are " + age + " years old";

document.getElementById('p2').innerHTML = "Hello " + firstName; 

document.getElementById('p3').innerHTML = "Enrolled " + student