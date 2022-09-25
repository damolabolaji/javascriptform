const fName = document.querySelector('#fullname')
const email = document.querySelector('#email')
const errorMsg = document.querySelector('#error-msg')
const userList = document.querySelector('#users')

document.querySelector('form').addEventListener('submit', onSubmit)

function onSubmit(e){
  e.preventDefault;
  
  if(fName.value === '' || email.value === ''){
    errorMsg.classList.add('error');
    errorMsg.innerText = 'Fields are empty. Please enter all fields';
    setTimeout(() => errorMsg.remove(), 3000);
  }
  else{
    const li = document.createElement('li');
    
    li.appendChild(document.createTextNode(`${fName.value} : ${email,value}`));
    
    userList.appendChild('li');
    
    fName.value = '';
    email.value === '';
  }

}
