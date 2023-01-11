console.log('signup.js reporting for duty..');

const form = document.getElementById('signup-form');

const handleSubmitClick = (event) => {
    event.preventDefault();
    const userData = {};
    console.log('Submit button has been clicked!');

    const formInputs = [...form.elements];
    formInputs.forEach((input) => {
        userData[input.name] = input.value;
    });

    fetch('http://localhost:3002/api/v1/signup', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
        .then((response) => response.json())
        .then((data) => {
            // if (data.status === 201) {
            //     window.location = '/login'
            // }
            console.log(data)
        })
        .catch((error) => console.log(error));

}

form?.addEventListener('submit', handleSubmitClick);