document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        validateForm();
    });

    function validateForm() {
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const message = document.querySelector('#message').value;

        if (name === '' || email === '' || message === '') {
            alert('All fields are required.');
        } else {
            alert('Form submitted successfully!');
            form.reset();
        }
    }
});