// For details info visit this page  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
//  Ex-1
num = 100;
switch (num) {
    case 1000:
        console.log('I am 1000')
        break;
    
    case 100:
        console.log('! am 100')
        break;
        
    case 20:
    case 10:
        console.log('I am either 20 or 10')
        break;        

    default:
        console.log(`I don't know who are you`)
}

// Ex-2:
const expr = 'Bananas';
switch(expr){
    case 'Oranges':
        console.log('Oranges are $0.59 a pound');
        break;
    case 'Mangoes':
    case 'Banana':    
        console.log('Mangoes and bananas are $2.79 a pound.');
        break;
        default:
            console.log(`Sorry, we are out of ${expr}.`);    
}


// Ex-3:
switch (expr) {
    case 'Oranges':
      console.log('Oranges are $0.59 a pound.');
      break;
    case 'Apples':
      console.log('Apples are $0.32 a pound.');
      break;
    case 'Bananas':
      console.log('Bananas are $0.48 a pound.');
      break;
    case 'Cherries':
      console.log('Cherries are $3.00 a pound.');
      break;
    case 'Mangoes':
    case 'Papayas':
      console.log('Mangoes and papayas are $2.79 a pound.');
      break;
    default:
      console.log('Sorry, we are out of ' + expr + '.');
  }
  
  console.log("Is there anything else you'd like?");
  

// Ex-4:
var foo = 5;
switch (foo) {
  case 2:
    console.log(2);
    break; // it encounters this break so will not continue into 'default:'
  default:
    console.log('default')
    // fall-through
  case 1:
    console.log('1');
    break;
}



var Animal = 'Giraffe';
switch (Animal) {
  case 'Cow':
  case 'Giraffe':
  case 'Dog':
  case 'Pig':
    console.log('This animal is not extinct.');
    break;
  case 'Dinosaur':
  default:
    console.log('This animal is extinct.');
}


const action = 'say_hello';
switch (action) {
  case 'say_hello':
    let message = 'hello';
    console.log(message);
    break;
  case 'say_hi':
    let message1 = 'hi';
    console.log(message1);
    break;
  default:
    console.log('Empty action received.');
}


const action2 = 'say_hello';
switch (action2) {
  case 'say_hello': { // added brackets
    let message2 = 'hello';
    console.log(message2);
    break;
  } // added brackets
  case 'say_hi': { // added brackets
    let message3 = 'hi';
    console.log(message3);
    break;
  } // added brackets
  default: { // added brackets
    console.log('Empty action received.');
  } // added brackets
}



