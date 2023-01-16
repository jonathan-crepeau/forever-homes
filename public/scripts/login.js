console.log('login.js reporting for duty..');
const form = document.getElementById('login-form');
const handleSubmitClick = (event) => {
    event.preventDefault();
    let userData = {};
    let formIsValid = true;
    console.log('Submit button clicked!');
    const formInputsArr = [...form.elements];
    formInputsArr.forEach((input) => {
        if (input.type !== 'submit' && input.value === "") {
            formIsValid = false;
        }
        else if (input.type === 'password' && input.value.length < 4) {
            formIsValid = false;
        }
        if (formIsValid && input.type !== 'submit') {
            userData[input.name] = input.value;
        }
    });
    console.log(userData);
    if (formIsValid) {
        fetch('http://localhost:3002/api/v1/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "credentials": "include"
            },
            body: JSON.stringify(userData)
        })
            .then((response) => response.json())
            .then((data) => {
            if (data.status === 200) {
                window.location = '/profile';
            }
            console.log(data);
        })
            .catch((error) => console.log(error));
    }
};
form.addEventListener('submit', handleSubmitClick);
