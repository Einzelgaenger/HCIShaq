let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// Function for next/previous buttons
function plusSlides(n) {
    slideIndex += n;
    let slides = document.getElementsByClassName("slide");
    if (slideIndex > slides.length) {slideIndex = 1}
    if (slideIndex < 1) {slideIndex = slides.length}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";  
}





// Funtion for iamge card
function showProductDetails(name, description, size, type, notes) {
    // Populate modal with product details
    document.getElementById('modal-product-name').innerText = name;
    document.getElementById('modal-product-description').innerText = description;
    document.getElementById('modal-product-size').innerText = size;
    document.getElementById('modal-product-type').innerText = type;
    document.getElementById('modal-product-notes').innerText = notes;

    // Show modal
    document.getElementById('product-modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('product-modal').style.display = 'none';
}




    // Function to show modal with dynamic content
    function showDetails(name, description, size, type, notes, imageUrl) {
        document.getElementById("modalProductName").innerText = name;
        document.getElementById("modalProductDescription").innerText = description;
        document.getElementById("modalProductSize").innerText = size;
        document.getElementById("modalProductType").innerText = type;
        document.getElementById("modalProductNotes").innerText = notes;
        document.getElementById("modalProductImage").src = imageUrl;
        document.getElementById("productModal").style.display = "block";
    }

    // Function to close the modal
    function closeModal() {
        document.getElementById("productModal").style.display = "none";
    }

    // Close modal if user clicks outside of it
    window.onclick = function(event) {
        if (event.target == document.getElementById("productModal")) {
            closeModal();
        }
    }





    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Clear previous error messages
        document.getElementById('nameError').innerText = '';
        document.getElementById('emailError').innerText = '';
        document.getElementById('phoneError').innerText = '';
        document.getElementById('genderError').innerText = '';
        document.getElementById('newsError').innerText = '';
        document.getElementById('formMessage').innerText = '';

        // Validate Full Name
        const fullName = document.getElementById('name').value;
        if (fullName.trim() === '') {
            document.getElementById('nameError').innerText = 'Full Name is required.';
        } else if (fullName.length < 2) {
            document.getElementById('nameError').innerText = 'Full Name must be at least 2 characters long.';
        } else if (fullName.split(' ').some(part => part.length < 1)) {
            document.getElementById('nameError').innerText = 'Full Name cannot contain empty spaces.';
        }

        // Validate Email
        const email = document.getElementById('email').value;
        if (email.trim() === '') {
            document.getElementById('emailError').innerText = 'Email is required.';
        } else if (email.indexOf('@') === -1 || email.indexOf('.') === -1 || email.indexOf('@') > email.lastIndexOf('.')) {
            document.getElementById('emailError').innerText = 'Please enter a valid email address.';
        }

        // Validate Phone Number
        const phone = document.getElementById('phone').value;
        if (phone.trim() === '') {
            document.getElementById('phoneError').innerText = 'Phone Number is required.';
        } else if (isNaN(phone) || phone.length < 10 || phone.length > 15) {
            document.getElementById('phoneError').innerText = 'Please enter a valid phone number (10-15 digits).';
        }

        // Validate Gender
        const gender = document.getElementById('gender').value;
        if (gender === '') {
            document.getElementById('genderError').innerText = 'Please select your gender.';
        }

        // Validate Checkbox
        const newsCheckbox = document.getElementById('news');
        if (!newsCheckbox.checked) {
            document.getElementById('newsError').innerText = 'You must subscribe to the newsletter.';
        }

        // If all validations pass, you can submit the form or perform further actions
        if (fullName && email && phone && gender && newsCheckbox.checked) {
            document.getElementById('formMessage').innerText = 'Form submitted successfully!';
            // Here you can add code to send the form data to the server
        }
    });

