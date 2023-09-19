var addForm = document.getElementById('addForm');
var container = document.getElementById('container');
container.addEventListener('click',deleteItem)
container.addEventListener('click',editItem)
addForm.addEventListener('submit', onSubmit)
function editItem(e){
    if(e.target.classList.contains('editBtn'))
    {
        let elem = e.target.parentElement;
        let email2 = document.getElementById('email1').value;
        document.getElementById('name1').innerText = (localStorage.getItem(newObj.email)).name;
        localStorage.removeItem(email2)
        container.removeChild(elem); 
    }
}
function deleteItem(e){
if(e.target.classList.contains('bata'))
{
    if(confirm('Are you sure?'))
    {
        let elem = e.target.parentElement;
        let email2 = document.getElementById('email1').value;
        localStorage.removeItem(email2)
        container.removeChild(elem); 
    }
}
}
function onSubmit(e){
    e.preventDefault();
var name2 = document.getElementById('name1').value;
var email2 = document.getElementById('email1').value;
var password2 = document.getElementById('password1').value;
var Obj = {
    name : name2 ,
    email : email2,
    pasword : password2
}
var newObj = JSON.stringify(Obj);
localStorage.setItem(newObj.email , newObj);
console.log(localStorage);
var op = JSON.parse(localStorage.getItem(newObj.email));
var elem = document.createElement('li');
var text = document.createTextNode(op.name + ' ' + op.email + ' ' + op.pasword );
var deletebtn = document.createElement('input');
var editbtn = document.createElement('input');
deletebtn.value = 'delete'
deletebtn.type = 'button';
deletebtn.style.float = 'right';
deletebtn.style.height = '30px';
deletebtn.style.width = '60px';
deletebtn.style.position = 'relative';
deletebtn.style.left = '70px';
deletebtn.style.bottom = '30px';
deletebtn.className ='bata';
deletebtn.style.border = '2px solid black'
editbtn.value = 'Edit'
editbtn.type = 'button';
editbtn.style.float = 'right';
editbtn.style.height = '30px';
editbtn.style.width = '60px';
editbtn.style.position = 'relative';
editbtn.style.left = '200px';
editbtn.style.bottom = '30px';
editbtn.className ='editBtn';
editbtn.style.border = '2px solid black'
elem.appendChild(text);
elem.appendChild(deletebtn);
elem.appendChild(editbtn);

var output = document.getElementById('output');
let container = document.getElementById('container');
container.insertBefore(elem , output);
}

