document.getElementById('myButton').onclick = function() { 
const CHECKBOX =  document.getElementById('myCheckbox'); 
const VISABTN = document.getElementById('visaBtn'); 
const MASTERCARDBTN = document.getElementById('masterCardbtn'); 
const PAYPAL = document.getElementById('paypalBtn'); 


let result = '';



// Checked para verificar se a caixa ta selecionada 
if(CHECKBOX.checked) {
  result = 'You Subscribe!'
 } else { 
  result = 'You NOT Subscribe!'
 }

 if(VISABTN.checked) { 
  result = 'You are paying with Visa!';
 } else if (MASTERCARDBTN.checked) {
  result = 'You are paying with MasterCard!';
 } else if (PAYPAL.checked) { 
  result = 'You are paying with Paypal!';
 } else { 
  result = 'Select a payment method! '
 }


 let resultado = document.getElementById('js-p').innerHTML = result;
} 

