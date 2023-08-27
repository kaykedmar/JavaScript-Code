

document.getElementById('submit').onclick = function () { 
  const CELSIUS = document.getElementById('cButton'); 
  const FAHRENHEIT = document.getElementById('fButton'); 
  let converter = document.getElementById('textBox'); 
 
  let temp = ''; 


  if (CELSIUS.checked) { 
    temp = converter.value; 
    temp = Number(temp); 
    temp = toCelsius(temp);
    document.getElementById('result').innerHTML = temp + "C"

  } else if (FAHRENHEIT.checked) { 
    temp = converter.value; 
    temp = Number(temp); 
    temp = toFahrenheit(temp);  
    document.getElementById('result').innerHTML = temp + "C"
    
  } else { 
    document.getElementById('result').innerHTML = "Selecione uma Opção"
  }
   

}


function  toCelsius(temp) { 
  return (temp - 32) * (5/9); 
}

function toFahrenheit(temp) { 
  return temp * 9 / 5 + 32; 
}