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





   