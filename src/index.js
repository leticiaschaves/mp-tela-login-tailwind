const username = document.getElementById('username');
const password = document.getElementById('password');
const submitBtn = document.getElementById('button');

const incorrectLoginAlert = () => {
    alert('please, type something...');
}

const correctLoginAlert = () => {
    alert('nice username! :)');
}

const handleSubmit = (event) => {
    event.preventDefault();
}

function validateLogin() {
    const invalidUsername = '';
    const invalidPassword = '';
    if (
        username.value === invalidUsername &&
        password.value === invalidPassword
    ) {
        incorrectLoginAlert();
    }
    return correctLoginAlert();
}
  
  submitBtn.addEventListener('click', validateLogin);

window.onload = function () {
    submitBtn.addEventListener('click', handleSubmit);
};

const enableSubmit = () => {
    submitBtn.disabled = this.value;
}

  window.onload = () => {
    username.addEventListener('change', enableSubmit);
    password.addEventListener('change', enableSubmit);
  }