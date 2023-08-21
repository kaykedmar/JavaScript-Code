let resultado = document.getElementById('resultado');
let grade =  80;


// Algumas maneiras de usar switch: 

/*
switch (grade) {
  case 'A':
  console.log("You did Great!");
    break;
  case 'B':
    console.log("You did Good!");
    break;
  case 'C':
    console.log("You did okay!");
    break;
  case 'D':
    console.log("You passed.... Barely");
    break;
  case 'F':
     console.log("You Failed");
    break;
  default:
    console.log("Invalid grade input");
*/

    switch (true) {
      case grade >= 90:
      console.log("You did Great!");
        break;
        case grade >= 80:
        console.log("You did Good!");
        break;
        case grade >= 70:
        console.log("You did okay!");
        break;
        case grade >= 60:
        console.log("You passed.... Barely");
        break;
        case grade > 60:
         console.log("You Failed");
        break;
      default:
        console.log("Invalid grade input");
}


