console.log('login.js reporting for duty..');

const form = document.getElementById('login-form');

const handleSubmitClick = (event) => {
    event.preventDefault();
    console.log('Submit button clicked.');
}

form.addEventListener('submit', handleSubmitClick);