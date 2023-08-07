
//На HTML-сторінці є ненумерований список з id="list", який складається із 5 елементів. У модальному вікні необхідно послідовно вивести вміст:
//     1) першого елемента списку
//     2) останнього елемента списку
//     3) другого елемента списку
//    4) четвертого елемента списку
//    5) третього елемента списку
//Приклад:
//•        1
//•        2
//•        3
//kd•        4
//•        5
//Результат виводу: 1, 5, 2, 4, 3

function idList() {
  const list = document.getElementById('list');
  const liElement = list.getElementsByTagName('li');

  let outAlert = '';
  outAlert += liElement[0].textContent + ',';
  outAlert += liElement[liElement.length - 1].textContent + ',';
  outAlert += liElement[1].textContent + ',';
  outAlert += liElement[3].textContent + ',';
  outAlert += liElement[2].textContent + ',';

  alert(outAlert);
}
idList();


//Для сторінки
//<body>
//  <h1>I'am a big header!!!</h1>
//  <div id="myDiv">
//    <p>First paragraph</p>
//   <p>Second paragraph</p>
///<p>Third paragraph</p>
//   <p>Fourth paragraph</p>
// </div>
// <ul id="myList">
//  <li>Make</li>
//   <li>me</li>
//<li>horizontal!</li>
//</ul>
//<span>Make me invisible, please!</span>
//</body>
// Напишіть скріпт, який за допомогою засобів DOM простилізує сторінку так як показано на картинці.

let elemTitle = document.getElementsByTagName('h1')[0];
elemTitle.style.backgroundColor = 'lightgreen';

let myDiv = document.getElementById('myDiv');
let elemFirstDiv = myDiv.getElementsByTagName('p')[0];
let elemSecondMyDiv = myDiv.getElementsByTagName('p')[1];
let elemThirdMyDiv = myDiv.getElementsByTagName('p')[2];
let elemFourthMyDiv = myDiv.getElementsByTagName('p')[3];
let elemFifthMyDiv = myDiv.getElementsByTagName('p')[4];

elemFirstDiv.style.fontWeight = 'bold';
elemSecondMyDiv.style.color = 'red';
elemThirdMyDiv.style.textDecoration = 'underline';
elemFourthMyDiv.style.fontStyle = 'italic';

let myList = document.getElementById('myList');
let elemMyList = myList.getElementsByTagName('li');
for (i = 0; i < elemMyList.length; i++) {
  elemMyList[i].style.display = 'inline-block';
}

let elemInvisible = document.getElementsByTagName('span');
elemInvisible[0].style.display = 'none';




// Напишіть скріпт, який за допомогою засобів DOM створить для порожньої HTML-сторінки таку структуру з тегів і їх атрибутів.
// <body>
//   main class="mainClass check item">
//      <div id="myDiv">
//          <p>First paragraph</p>
//      </div>
//  </main>
// </body>

const mainTag = document.createElement('main');
mainTag.setAttribute('class', 'mainClass check item');
console.log(mainTag);


const myDiv3 = document.createElement('div');
myDiv3.setAttribute('id', 'myDiv3');
console.log(myDiv3);
mainTag.append(myDiv3);

const elementP = document.createElement('p');
myDiv3.append(elementP);
const textP = document.createTextNode('First paragraph');
elementP.append(textP);
console.log(elementP);






// 4.
// Задача описана в блоці JS
// https://codepen.io/misha_klymenko/pen/Jjabvez





// Задача описана в блоці JS
// https://codepen.io/misha_klymenko/pen/abzLvqo




// 6.
// Задача описана в блоці JS
// https://codepen.io/misha_klymenko/pen/dyjyeGO