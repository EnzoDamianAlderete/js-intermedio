//Ejercicio 1 -- Utiliza un arreglo para almacenar una colección de datos --
let yourArray = ['Hello',1,'a',true,2]; // Cambia esta línea
//Ejercicio 2 -- Accede a los contenidos de un arreglo utilizando la notación de corchetes --
let myArray = ["a", "b", "c", "d"];
// Cambia solo el código debajo de esta línea
myArray[1] = 2;
// Cambia solo el código encima de esta línea
console.log(myArray);
//Ejercicio 3 -- Agrega elementos a un arreglo con push() y unshift() --
function mixedNumbers(arr) {
    // Cambia solo el código debajo de esta línea
    arr.unshift('I', 2, 'three');
    arr.push(7, 'VIII', 9);
    // Cambia solo el código encima de esta línea
    return arr;
  }
  
  console.log(mixedNumbers(['IV', 5, 'six']));
//Ejercicio 4 -- Elimina elementos de un arreglo con pop() y shift() --
function popShift(arr) {
    let popped = arr.pop(); // Cambia esta línea
    let shifted = arr.shift(); // Cambia esta línea
    return [shifted, popped];
  }
  
  console.log(popShift(['challenge', 'is', 'not', 'complete']));
//Ejercicio 5 -- Elimina elementos usando splice()--
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Cambia solo el código debajo de esta línea
arr.splice(0,1);
arr.splice(3);
// Cambia solo el código encima de esta línea
console.log(arr);
//Ejercicio 6 -- Agrega elementos usando splice() --
function htmlColorNames(arr) {
    // Cambia solo el código debajo de esta línea
    arr.splice(0,2,"DarkSalmon","BlanchedAlmond");
    // Cambia solo el código encima de esta línea
    return arr;
  }
  
  console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));
//Ejercicio 7 -- Copia elementos de un arreglo usando slice() --
function forecast(arr) {
    // Cambia solo el código debajo de esta línea
    arr = arr.slice(2,4);
    return arr;
  }
  
  // Cambia solo el código encima de esta línea
  console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
//Ejercicio 8 -- Copia un arreglo con el operador de propagación --
function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
      // Cambia solo el código debajo de esta línea
    newArr.push([...arr])
      // Cambia solo el código encima de esta línea
      num--;
    }
    return newArr;
  }
  
  console.log(copyMachine([true, false, true], 2));
//Ejercicio 9 -- Combina arreglos con el operador de propagación --
function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ['learning',...fragment, "is","fun"]; // Cambia esta línea
    return sentence;
  }
  
  console.log(spreadOut());
//Ejercicio 10 -- Comprueba la presencia de un elemento con indexOf() --
function quickCheck(arr, elem) {
    // Cambia solo el código debajo de esta línea
  return arr.indexOf(elem) > -1 ? true : false;
    // Cambia solo el código encima de esta línea
  }
  
  console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
//Ejercicio 11 -- Itera a través de todos los elementos de un arreglo utilizando bucles "for" --
function filteredArray(arr, elem) {
    let newArr = [];
    // Cambia solo el código debajo de esta línea
  for(let i =0; i < arr.length; i++){
    if(arr[i].indexOf(elem)== -1){
      newArr.push(arr[i]);
    }
  }
    // Cambia solo el código encima de esta línea
    return newArr;
  }
  
  console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
//Ejercicio 12 -- Crea arreglos complejos multidimensionales --
let myNestedArray = [
  // Cambia solo el código debajo de esta línea
  ['unshift', false, 1, 2, 3, 'complex', 'nested',['deep']],//deep en nivel 3
  [[['deeper']],'loop', 'shift', 6, 7, 1000, 'method'],//deeper en nivel 4
  ['concat', false, true, 'spread', 'array'],
  [[[['deepest']]],'mutate', 1327.98, 'splice', 'slice', 'push'],//deepest en nivel 5
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
  // Cambia solo el código encima de esta línea
];
//Ejercicio 13 -- Agrega pares clave-valor a objetos de JavaScript --
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28
  };
  
  // Cambia solo el código debajo de esta línea
  foods['bananas']=13;
  foods['grapes']=35;
  foods['strawberries']=27;
  // Cambia solo el código encima de esta línea
  
  console.log(foods);
  //Ejercicio 14 -- Modifica un objeto anidado dentro de un objeto --
  let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
      totalUsers: 51,
      online: 42
    }
  };

  // Cambia solo el código debajo de esta línea
  userActivity.data.online = 45;
  // Cambia solo el código encima de esta línea

  console.log(userActivity);
//Ejercicio 15 -- Accede a los nombres de propiedad con la notación de corchetes --
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

function checkInventory(scannedItem) {
  // Cambia solo el código debajo de esta línea
return foods[scannedItem];
  // Cambia solo el código encima de esta línea
}

console.log(checkInventory("apples"));
//Ejercicio 16 -- Usa la palabra clave "delete" para eliminar las propiedades de los objetos --
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

// Cambia solo el código debajo de esta línea
delete foods.oranges;
delete foods.plums;
delete foods.strawberries;
// Cambia solo el código encima de esta línea

console.log(foods);
//Ejercicio 17 -- Evalúa si un objeto tiene una propiedad --
let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(userObj) {
  // Cambia solo el código debajo de esta línea
if(userObj.hasOwnProperty('Alan') && userObj.hasOwnProperty('Jeff') && userObj.hasOwnProperty('Jeff') && userObj.hasOwnProperty('Sarah') && userObj.hasOwnProperty('Ryan')){
  return true;
}
  return false;
  // Cambia solo el código encima de esta línea
}

console.log(isEveryoneHere(users));
//Ejercicio 18 -- Itera a través de las claves de un objeto con una sentencia "for...in" --
const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(usersObj) {
  // Cambia solo el código debajo de esta línea
let aux = 0;
for(let user in usersObj){
  if (usersObj[user].online == true){
   aux++;
  }
}
return aux;
  // Cambia solo el código encima de esta línea
}

console.log(countOnline(users));
//Ejercicio 19 -- Genera un arreglo de todas las claves de los objetos con Object.keys() --
let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function getArrayOfUsers(obj) {
  // Cambia solo el código debajo de esta línea
return Object.keys(obj);
  // Cambia solo el código encima de esta línea
}

console.log(getArrayOfUsers(users));
//Ejercicio 20 -- Modifica un arreglo almacenado en un objeto --
let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  // Cambia solo el código debajo de esta línea
 userObj.data.friends.push(friend);
 return userObj.data.friends;
  // Cambia solo el código encima de esta línea
}

console.log(addFriend(user, 'Pete'));