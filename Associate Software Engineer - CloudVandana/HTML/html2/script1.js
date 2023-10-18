function submitForm() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var dob = document.getElementById('dob').value;
    var country = document.getElementById('country').value;
    var gender = '';
    if (document.getElementById('male').checked) {
        gender = 'Male';
    }
    if (document.getElementById('female').checked) {
        gender = 'Female';
    }
    var profession = document.getElementById('profession').value;
    var email = document.getElementById('email').value;
    var mobile = document.getElementById('mobile').value;

    // Validation: Check if all fields are filled
    if (firstName && lastName && dob && country && gender && profession && email && mobile) {
        // Display popup with form data
        document.getElementById('popupFirstName').textContent = firstName;
        document.getElementById('popupLastName').textContent = lastName;
        document.getElementById('popupDOB').textContent = dob;
        document.getElementById('popupCountry').textContent = country;
        document.getElementById('popupGender').textContent = gender;
        document.getElementById('popupProfession').textContent = profession;
        document.getElementById('popupEmail').textContent = email;
        document.getElementById('popupMobile').textContent = mobile;

        document.getElementById('popup').style.display = 'block';
    } else {
        alert('Please fill out all fields.');
    }
}

function closePopup() {
    // Close the popup and reset the form
    document.getElementById('popup').style.display = 'none';
    document.getElementById('surveyForm').reset();
}
