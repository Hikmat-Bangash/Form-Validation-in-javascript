
let form = document.getElementById('form');
let name = document.getElementById('name');
let email = document.getElementById('email');
let password = document.getElementById('password');
let password2 = document.getElementById('password2');

// ------- hiting submit button for action
form.addEventListener('submit', (e) =>{
    e.preventDefault();
    console.log('clicked')
    checkInputs();
});

//-------- CheckInputs function ---------
function checkInputs(){
    const Username = name.value.trim();
    const Email = email.value.trim();
    
    //------ FOR USERNAME ----------
    if(Username == ""){
        SetError(name,"Username cannot be blank!");
    }else{
        Success(name);                
    }

 //-------- EMAIL --------------
 if(Email == ""){
    SetError(email,`Email cannot be blank!`);
 }else{
    Success(email); 
   }

//------- PASSWORD -------------
if(password.value == ""){
    SetError(password,`password cannot be blank!`);
 }else{
    Success(password); 
   }

//------- PASSWORD2 -------------
if(password2.value == ""){
    SetError(password2,`Re-type password cannot be blank!`);
 }
 else if(password.value != password2.value){
    SetError(password2,`Re-type password does not match`);
 } 
 else{
    Success(password2); 
   }
};
//-------- ERROR function -----------------
function SetError(input,message){
  const parent = input.parentElement; // form-contain
  parent.classList.add('error');
  input.nextElementSibling.innerText = message;         
}
//---------- Error Success function -------------

function Success(input){
const parent = input.parentElement; // form-contain
  parent.classList.add('Success');
  parent.classList.remove('error');
  input.nextElementSibling.innerText = "";
}
