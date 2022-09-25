const fName = document.querySelector('#fullname')
const email = document.querySelector('#email')
const errorMsg = document.querySelector('#error-msg')

function onSubmit(e){
  e.preventDefault;
  
  if(fName.value === '' || email.value === ''){
    errorMsg.classList.add('error');
    errorMsg.innerText = 'Fields are empty. Please enter all fields';
    setTimeout(() => errorMsg.remove(), 3000);
  }

}
