'use strict';
let table1 =document.getElementById('container');
let tbody =document.getElementById('tbody');
let myForm = document.getElementById('form1');
let coffeeArr=[];

function Coffee (userName,quantity){

    this.userName=userName;
    this.quantity=quantity;
    coffeeArr.push(this);
}
function settingItems(){
    let data = JSON.stringify(coffeeArr);
    localStorage.setItem('CoffeeArr',data);
}
function getingItems(){
    let stringobj= localStorage.getItem ('CoffeeArr');
    let normalobj= JSON.parse(stringobj);
    if (normalobj !== null){ normalobj=coffeeArr;}
render();
}
function handlesubmite (event){
  event.preventDefault();
  let userName= event.target.userName.value;
  let quantity= event.target.quantity.value;
  let newobj = new Coffee (userName,quantity);
  settingItems();
  render();
}
function render (){
    while (table1.rows.length > 0) {
        table1.deleteRow(0);
     }
for (let i = 0; i < coffeeArr.length; i++) {
    let tr1 = document.createElement('tr');
    let td1 =document.createElement('td');
    tbody.appendChild(tr1);
    tr1.appendChild(td1);
    let result = `${coffeeArr[i].userName} ordered ${coffeeArr[i].quantity}`;
    td1.textContent= result;
}
}

myForm.addEventListener('submit',handlesubmite);
getingItems();