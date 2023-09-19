var addForm = document.getElementById('addForm');
var container = document.getElementById('container');
container.addEventListener('click',deleteItem)
addForm.addEventListener('submit', onSubmit)
function deleteItem(e){
if(e.target.classList.contains('btn'))
{
    if(confirm('Are you sure?'))
    {
        let elem = e.target.parentElement;
        console.log(elem);
        console.log(container);
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
deletebtn.value = 'delete';
deletebtn.type = 'button';
deletebtn.style.float = 'right';
deletebtn.style.height = '30px';
deletebtn.style.width = '60px';
deletebtn.style.paddingBottom = '6px';
deletebtn.style.position = 'relative';
deletebtn.style.left = '50px';
deletebtn.style.bottom = '30px';
deletebtn.className ='btn';
deletebtn.style.border = '2px solid black'
elem.appendChild(text);
elem.appendChild(deletebtn);
var output = document.getElementById('output');
let container = document.getElementById('container');
container.insertBefore(elem , output);
}

