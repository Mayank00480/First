/*document.getElementById('main-header').style.border = '2px solid black';
//document.title.style.border = '1px solid black';
document.getElementById('addItemsHeading').style.color = 'green';
document.getElementById('addItemsHeading').style.fontWeight = 'bold';
console.log(document.getElementById('addItemsHeading'));
console.log('hello');
let li = document.querySelectorAll('.list-group-item');
//li[2].style.backgroundColor = 'green';
li.forEach((e) =>{
e.style.fontWeight = 'bold';
})
let list2 = document.querySelectorAll('li');
list2[4].style.color = 'blue';
//let queryDemo = document.querySelector('.list-group-item:nth-child(2)').style.backgroundColor = 'green';
//let queryDemo2 = document.querySelector('.list-group-item:nth-child(2)').style.display = 'none';
//let querySelectorDemo = document.querySelectorAll('.list-group-item')[1].style.color = 'green';
 var odd = document.querySelectorAll('.list-group-item:nth-child(1)')
 for(let i = 0;i<odd.length;++i)
 {
 //   odd[i].style.backgroundColor = 'green';
 }
 //-------------------------------------------------------------------------------

let element = document.querySelector('#items');
console.log(element.parentNode); 
console.log(element.parentElement);
//Parent Node and Parent Element can be used interchangeably
console.log(element.childNodes);

console.log(element.children);
console.log(element.children[2]);
console.log(element.firstChild);
console.log(element.firstElementChild);
console.log(element.lastChild);
console.log(element.lastElementChild);
console.log(element.previousElementSibling);
console.log(element.nextElementSibling);
let head = document.getElementById('main');
let newElem = document.createElement('div');
 newElem.className = 'newClass';
newElem.id = 'newId';
console.log(newElem);  
let text  = document.createTextNode('hello world');
newElem.appendChild(text);
head.insertBefore(newElem,element);

*/
let form = document.getElementById('addForm');
form.addEventListener('submit',addElement);
var li = document.getElementById('items');
li.addEventListener('click',removeElement);
let filter = document.getElementById('filter');
//console.log(filter);
filter.addEventListener('keyup',filterItems)
function filterItems(e)
{
    console.log(1);
let text1 = e.target.value.toLowerCase();
console.log(text1);
let items1 = document.getElementsByTagName('li');
Array.from(items1).forEach((elem) =>{
    let data = elem.firstChild.textContent;
    if(data.toLowerCase().indexOf(text1) != -1)
    {
        elem.style.display = 'block';
    }
    else elem.style.display = 'none'; 
})
}

function addElement(e) {
    
    e.preventDefault();
    var li = document.createElement('li');
    li.className = 'list-group-item';
    let item = document.getElementById('item').value;
    let item2 = document.getElementById('item2').value;
    li.appendChild(document.createTextNode(item));
    let newP = document.createElement('p');
    newP.appendChild(document.createTextNode(" " +item2));
    li.appendChild(newP);
    console.log(li);
    let btn = document.createElement('button');
    btn.className = 'btn btn-danger btn-sm float-right delete';
   
   
    btn.appendChild(document.createTextNode('X'));
  
    li.appendChild(btn);
    console.log(li);
    var items  = document.getElementById('items');
    items.appendChild(li);
}
function removeElement(e){
    console.log(1);
if(e.target.classList.contains('btn'))
{
    if(confirm('Are you sure?'))
    {
        var li = e.target.parentElement;
         items.removeChild(li);
    }

}
}
