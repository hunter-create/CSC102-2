function validateForm() {
    // Gets the input values for first name, last name, and zip code
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const zipCode = document.getElementById('zipCode').value.trim();

    // Combine first and last name with a space in between
    const fullName = firstName + ' ' + lastName;

    // Select the warning message and secret message elements
    const warningMessage = document.getElementById('warningMessage');
    const secretMessage = document.getElementById('secretMessage');

    // Reset warning and secret message display
    warningMessage.textContent = '';
    secretMessage.style.display = 'none';

    // Checks if zip code is filled out, but first and last names are empty
    if (zipCode && !firstName && !lastName) {
        // Displays a warning message if only zip code is filled
        warningMessage.textContent = 'Please enter first and last name.';
        return false; // Stops form processing
    }

    // Check if the combined name length is more than 20 characters
    if (fullName.length > 20) {
        // Displays a warning message if the name is too long
        warningMessage.textContent = 'Error: Full name should be 20 characters or less.';
        return false; // Stop form processing
    }

    // Check to make sure zip code is all numerical numbers or else display a warning
    if (!/^\d{5}$/.test(zipCode)) {
        warningMessage.textContent = 'Error: Zip code must be exactly 5 numerical digits.';
        return false; // Stop form processing
    }

    // If all inputs are valid, display the secret message
    secretMessage.style.display = 'block';
    return false; // Prevent actual form submission for demonstration
}