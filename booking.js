var addForm = document.getElementById('addForm');
addForm.addEventListener('submit', onSubmit)
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
localStorage.setItem("newObj" , newObj);
console.log(localStorage);
var op = JSON.parse(localStorage.getItem('newObj'));
document.getElementById('output').innerText =  op.name + '  ' + op.email+ '  ' + op.pasword;

}

