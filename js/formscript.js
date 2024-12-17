document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');

    // Function to validate Full Name
    function validateFullName() {
        const fullName = document.getElementById('name').value;
        const nameError = document.getElementById('nameError');
        nameError.innerText = ''; // Clear previous error
        if (fullName.trim() === '') {
            nameError.innerText = 'Full Name is required.';
        } else if (fullName.length < 2) {
            nameError.innerText = 'Full Name must be at least 2 characters long.';
        } else if (fullName.split(' ').some(part => part.length < 1)) {
            nameError.innerText = 'Full Name cannot contain empty spaces.';
        }
    }

    // Function to validate Email
    function validateEmail() {
        const email = document.getElementById('email').value;
        const emailError = document.getElementById('emailError');
        emailError.innerText = ''; // Clear previous error
        if (email.trim() === '') {
            emailError.innerText = 'Email is required.';
        } else if (email.indexOf('@') === -1 || email.indexOf('.') === -1 || email.indexOf('@') > email.lastIndexOf('.')) {
            emailError.innerText = 'Please enter a valid email address.';
        }
    }

    // Function to validate Phone Number
    function validatePhone() {
        const phone = document.getElementById('phone').value;
        const phoneError = document.getElementById('phoneError');
        phoneError.innerText = ''; // Clear previous error
        if (phone.trim() === '') {
            phoneError.innerText = 'Phone Number is required.';
        } else if (isNaN(phone) || phone.length < 10 || phone.length > 15) {
            phoneError.innerText = 'Please enter a valid phone number (10-15 digits).';
        }
    }

    // Function to validate Gender
    function validateGender() {
        const gender = document.getElementById('gender').value;
        const genderError = document.getElementById('genderError');
        genderError.innerText = ''; // Clear previous error
        if (gender === '') {
            genderError.innerText = 'Please select your gender.';
        }
    }


    // Function to validate Message
    function validateMessage() {
        const message = document.getElementById('message').value;
        const messageError = document.getElementById('messageError');
        messageError.innerText = ''; // Clear previous error
        if (message.trim() === '') {
            messageError.innerText = 'Message is required.';
        } else if (message.length < 10) {
            messageError.innerText = 'Message must be at least 10 characters long.';
        }
    }

    // Attach input event listeners for real-time validation
    document.getElementById('name').addEventListener('input', validateFullName);
    document.getElementById('email').addEventListener('input', validateEmail);
    document.getElementById('phone').addEventListener('input', validatePhone);
    document.getElementById('gender').addEventListener('change', validateGender);
    document.getElementById('message').addEventListener('input', validateMessage);

    // Handle form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Clear previous messages
        document.getElementById('formMessage').innerText = '';

        // Validate all fields before submission
        validateFullName();
        validateEmail();
        validatePhone();
        validateGender();
        validateMessage(); // Validate message

        // Check if there are any errors
        const errors = document.querySelectorAll('.error');
        const hasErrors = Array.from(errors).some(error => error.innerText !== '');

        // If no errors, show success message
        if (!hasErrors) {
            document.getElementById('formMessage').innerText = 'Form submitted successfully!';
            // Here you can add code to send the form data to the server
        }
    });
});
