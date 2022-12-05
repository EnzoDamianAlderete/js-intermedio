//Ejercicio 1 -- Aprende sobre programación funcional --

// Función que retorna una cadena de texto representando una taza de té verde
const prepareTea = () => 'greenTea';

/*
Dada una función (representando el tipo de té) y el número de tazas necesarias, la 
    siguiente función retorna un arreglo de cadenas de texto (cada una representando un tipo específico de té).
*/
const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Cambia solo el código debajo de esta línea
const tea4TeamFCC = getTea(40);
// Cambia solo el código encima de esta línea

//Ejercicio 2 -- Comprende la terminología de la programación funcional --
// Función que retorna una cadena de texto representando una taza de té verde
const prepareGreenTea = () => 'greenTea';

// Función que retorna una cadena de texto representando una taza de té negro
const prepareBlackTea = () => 'blackTea';

/*
Dada una función (representando el tipo de té) y el número de tazas necesarias, la 
    siguiente función retorna un arreglo de cadenas de texto (cada una representando un tipo específico de té).
*/
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Cambia solo el código debajo de esta línea
const tea4GreenTeamFCC = getTea(prepareGreenTea , 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);
// Cambia solo el código encima de esta línea

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);

//Ejercicio 3 -- Comprende los peligros de usar el código imperativo --
// tabs es un arreglo de títulos de cada sitio abierto dentro de la ventana
const Window = function(tabs) {
  this.tabs = tabs; // Mantenemos un registro del arreglo dentro del objeto
};

// Cuando unes dos ventanas en una
Window.prototype.join = function(otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};

// Cuando abres una nueva pestaña al final
Window.prototype.tabOpen = function(tab) {
  this.tabs.push('new tab'); // Abramos una nueva pestaña por ahora
  return this;
};

// Cuando cierras una pestaña
Window.prototype.tabClose = function(index) {

  // Cambia solo el código debajo de esta línea

  const tabsBeforeIndex = this.tabs.splice(0, index); // Obtiene las pestañas antes de la pestaña
  const tabsAfterIndex = this.tabs.splice(1); // Obtiene las pestañas después de la pestaña

  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Únelos juntos

  // Cambia solo el código encima de esta línea

  return this;
 };

// Vamos a crear tres ventanas del navegador
const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Tu casilla de correo, drive y otros sitios de trabajo
const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Sitios sociales
const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Sitios de entretenimiento

// Ahora completa la apertura de la pestaña, cierre, y otras operaciones
const finalTabs = socialWindow
  .tabOpen() // Abre una nueva pestaña para memes de gatos
  .join(videoWindow.tabClose(2)) // Cierra la tercera pestaña en videoWindow y une
  .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);
//Ejercicio 4 -- Evita mutaciones y efectos secundarios utilizando programación funcional --
// La variable global
let fixedValue = 4;

function incrementer() {
  // Cambia solo el código debajo de esta línea
  let aux = fixedValue + 1;
  return aux;
  // Cambia solo el código encima de esta línea
}
//Ejercicio 5 -- Pasa argumentos para evitar la dependencia externa en una función --
// La variable global
let fixedValue = 4;

// Cambia solo el código debajo de esta línea
function incrementer(fixedValue) {
let aux = fixedValue + 1;
  return aux;

  // Cambia solo el código encima de esta línea
}

//Ejercicio 6 -- Refactoriza variables globales por fuera de funciones --

// La variable global
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Cambia el código debajo de esta línea
function add(bookList,bookName) {
  const newBookList = [...bookList];
  newBookList.push(bookName);
  return newBookList;

  // Cambia el código encima de esta línea
}

// Cambia el código debajo de esta línea
function remove(arr,bookName) {
  let newArr = [...arr];
  if(newArr.indexOf(bookName)>=0){
    newArr.splice(newArr.indexOf(bookName),1);
    return newArr;
  }

    // Cambia el código encima de esta línea
}

//Ejercicio 7 -- Usa el método "map" para extraer datos de un arreglo --

// La variable global
const watchList = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
  }
];

// Cambia solo el código debajo de esta línea
const ratings = watchList.map( elem => ({
title:elem["Title"],
rating:elem["imdbRating"]
}));
// Cambia solo el código encima de esta línea

console.log(JSON.stringify(ratings));
//Ejercicio 8 -- Implementa map en un prototipo --
Array.prototype.myMap = function(callback) {
  const newArray = [];
  // Cambia solo el código debajo de esta línea
  this.forEach(a => newArray.push(callback(a)));
  // Cambia solo el código encima de esta línea
  return newArray;
};

//Ejercicio 9 -- Usa el método de "filter" para extraer datos de un arreglo --

// La variable global
const watchList = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
  }
];

// Cambia solo el código debajo de esta línea

const filteredList = watchList.map( elem => ({
title:elem["Title"],
rating:elem["imdbRating"]
})).filter( elem => elem.rating >= 8.0);

// Cambia solo el código encima de esta línea

console.log(filteredList);
//Ejercicio 10 -- Implementa el método filter en un prototipo --
Array.prototype.myFilter = function(callback) {
  const newArray = [];
  // Cambia solo el código debajo de esta línea
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i]) == true) {
      newArray.push(this[i]);
    }
  }
  // Cambia solo el código encima de esta línea
  return newArray;
};

//Ejercicio 11 -- Devolver parte de un arreglo mediante el método slice --
function sliceArray(anim, beginSlice, endSlice) {
  // Cambia solo el código debajo de esta línea
const newArr = anim.slice(beginSlice,endSlice);
return newArr;
  // Cambia solo el código encima de esta línea
}

const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);


//Ejercicio 12 -- Remueve elementos de un arreglo usando slice en lugar de splice --
function nonMutatingSplice(cities) {
  // Cambia solo el código debajo de esta línea
  const newArr = cities.slice(0,3)
  return newArr;
  // Cambia solo el código encima de esta línea
}

const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);

//Ejercicio 13 -- Combina dos arreglos utilizando el método "concat" --
function nonMutatingConcat(original, attach) {
  // Cambia solo el código debajo de esta línea
const newArr = original.concat(attach);
return newArr;

  // Cambia solo el código encima de esta línea
}

const first = [1, 2, 3];
const second = [4, 5];
nonMutatingConcat(first, second);

//Ejercicio 14 -- Agrega elementos al final de un arreglo utilizando concat en lugar de push --

function nonMutatingPush(original, newItem) {
  // Cambia solo el código debajo de esta línea
  const newArr =  original.concat(newItem);
  return newArr;
  // Cambia solo el código encima de esta línea
}

const first = [1, 2, 3];
const second = [4, 5];
nonMutatingPush(first, second);

//Ejercicio 15 -- Utiliza el método "reduce" para analizar datos --

// La variable global
const watchList = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
  }
];

function getRating(watchList) {
  // Cambia solo el código debajo de esta línea
  const averageRating = watchList.filter(elem => elem.Director === "Christopher Nolan").map(elem => Number(elem.imdbRating)).reduce((acum,num)=>{ return acum + num})/watchList.filter(elem => elem.Director === "Christopher Nolan").length;


  // Cambia solo el código encima de esta línea
  return averageRating;
}

console.log(getRating(watchList));

//Ejercicio 16 -- Utiliza las funciones de orden superior "map", "filter" o "reduce" para resolver un problema complejo --

const squareList = arr => {
  // Cambia solo el código debajo de esta línea
  arr = arr.filter(elem => (elem >0)&& Number.isInteger(elem)).map(elem => elem**2)
  return arr;
  // Cambia solo el código encima de esta línea
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);

//Ejercicio 17 -- Ordena un arreglo alfabéticamente con el método sort --

function alphabeticalOrder(arr) {
  // Cambia solo el código debajo de esta línea
  arr.sort();
  return arr
  // Cambia solo el código encima de esta línea
}

alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);

//Ejercicio 18 -- Devuelve un arreglo ordenado sin cambiar el arreglo original --

const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Cambia solo el código debajo de esta línea
let newArr = arr.slice();
newArr = newArr.sort(function(a, b) {
  return a - b;
});

return newArr;
  // Cambia solo el código encima de esta línea
}

nonMutatingSort(globalArray);

//Ejercicio 19 -- Divide una cadena en un arreglo utilizando el método "split" --
function splitify(str) {
  // Cambia solo el código debajo de esta línea
 return str.split(/\W/);
  // Cambia solo el código encima de esta línea
}

splitify("Hello World,I-am code");

//Ejercicio 20 -- Combina un arreglo en una cadena utilizando el método "join" --

function sentensify(str) {
  // Cambia solo el código debajo de esta línea
const newArr = str.split(/\W/);
return newArr.join(" ");

  // Cambia solo el código encima de esta línea
}

sentensify("May-the-force-be-with-you");

//Ejercicio 21 -- Aplicar programación funcional para convertir cadenas a slugs de URL --

// Cambia solo el código debajo de esta línea
function urlSlug(title) {
  return title.toLowerCase().trim().split(/\s+/).join('-');
  }
  // Cambia solo el código encima de esta línea
  urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");

//Ejercicio 22 -- Usa el método "every" para comprobar que cada elemento de un arreglo atienda un criterio --

function checkPositive(arr) {
  // Cambia solo el código debajo de esta línea
return arr.every(num => num > 0);
  // Cambia solo el código encima de esta línea
}

checkPositive([1, 2, 3, -4, 5]);

//Ejercicio 23 -- Usa el método "some" para comprobar si algún elemento en un arreglo cumple un criterio --

function checkPositive(arr) {
  // Cambia solo el código debajo de esta línea
return arr.some(num => num > 0);

  // Cambia solo el código encima de esta línea
}

checkPositive([1, 2, 3, -4, 5]);

//Ejercicio 24 -- Introducción a la currificación y a la aplicación de funciones parciales --

function add(x) {
  // Cambia solo el código debajo de esta línea
  return function(y){
    return function(z){
      return x+y+z;
    }
  }

  // Cambia solo el código encima de esta línea
}

add(10)(20)(30);