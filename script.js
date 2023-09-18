document.getElementById('main-header').style.border = '2px solid black';
//document.title.style.border = '1px solid black';
document.getElementById('addItemsHeading').style.color = 'green';
document.getElementById('addItemsHeading').style.fontWeight = 'bold';
console.log(document.getElementById('addItemsHeading'));
console.log('hello');
let li = document.querySelectorAll('.list-group-item');
li[2].style.backgroundColor = 'green';
li.forEach((e) =>{
e.style.fontWeight = 'bold';
})
let list2 = document.querySelectorAll('li');
list2[4].style.color = 'blue';
