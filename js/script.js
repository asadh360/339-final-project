// When form is submitted, display meesage
document.querySelector('input[name="submit"]').addEventListener("click", function() {
    let submitted = false;
    if (submitted == true) {
        document.getElementById('thankYouMsg').innerHTML = "Looks like you've already submitted our form! Thanks!";
        return;
    }
    // If any of the required input fields are not entered, display error message
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    if (firstName == "") {
        document.getElementById('firstNameError').innerHTML = "***FIRST NAME REQUIRED***";
    } else {
        document.getElementById('firstNameError').innerHTML = "";
    }
    if (lastName == "") {
        document.getElementById('lastNameError').innerHTML = "***LAST NAME REQUIRED***";
    } else {
        document.getElementById('lastNameError').innerHTML = "";
    }
    if (email == "") {
        document.getElementById('emailError').innerHTML = "***EMAIL REQUIRED***";
        return;
    } else {
        document.getElementById('emailError').innerHTML = "";
    }
    document.getElementById('thankYouMsg').innerHTML = "Thanks for contacting us! You have now been added to our mailing list! We'll get back to you as soon as we can!";
    submitted = true;

}) 