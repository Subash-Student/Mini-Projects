var nameError = document.getElementById('error-Name');
var phoneError = document.getElementById('error-Phone');
var mailError = document.getElementById('error-Mail');
var msgError = document.getElementById('error-Msg');
var submitError = document.querySelector(".submitError");



function nameValidate(){

    let name = document.getElementById('Name').value;
    if(name.length == 0){
        nameError.innerHTML = 'Name is Required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Enter Full Name';
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-square-check"></i>';
    return true;
}

function phoneValidate(){

  let phone = document.getElementById("Phone").value;

  if(phone.length == 0){
    phoneError.innerHTML = 'Phone Number Is Required';
    return false;
  }
  if(phone.length < 10){
    phoneError.innerHTML = 'Phone Number Must Be 10 Digits';
    return false;
  }
  if(!phone.match(/^[0-9]{10}$/)){
    phoneError.innerHTML = 'Numbers Only';
    return false;
  }
  phoneError.innerHTML = '<i class="fa-solid fa-square-check"></i>';
  return true;
}

function mailValidate(){
    let mail = document.getElementById('Mail').value;

    if(mail.length === 0){
        mailError.innerHTML = 'Mail Is Required';
        return false;
    }
    if(!mail.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        mailError.innerHTML = 'Email Is Invalid';
        return false;
    }
    mailError.innerHTML = '<i class="fa-solid fa-square-check"></i>';
    return true;
}
function msgValidate(){
    let msg = document.getElementById('Msg').value;
    total = 30;
    left = total - msg.length;

    if(left > 0){
        msgError.innerHTML = left + 'More Character Required';
        return false;
    }
    msgError.innerHTML = '<i class="fa-solid fa-square-check"></i>';
    return true;
}
function formValidate(){ 
    if(!nameValidate() || !phoneValidate() || !mailValidate() || !msgValidate()){
        submitError.style.display = 'block';
        submitError.innerHTML = 'Check The Form';
        setTimeout(function(){
            submitError.style.display = 'none';
        },3000)
        return false;
    }
}


