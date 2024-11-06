window.onload = function () {
    const today = new Date();
    const formattedDate = today.toLocaleDateString(); // Format date as needed
    document.getElementById('dateStamp').innerText = formattedDate;
};

// Function to show the lightbox with the clicked image
function showLightbox(imageSrc) {
    
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    lightboxImage.src = imageSrc;
    lightbox.style.display = 'flex';
}

// Function to close the lightbox when clicked
function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

//function to clear field
function clearField(element) {
    element.value = '';
}

//function for validation
function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;
   

    if (name === '' || email === '' || subject === '' || message === '') {
        alert('All fields are required.');
        return false;
    }
    return true;
}